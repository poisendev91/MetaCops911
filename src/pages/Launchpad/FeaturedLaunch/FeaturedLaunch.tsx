import { FC, useEffect, useState, useMemo, useCallback } from "react";
import Countdown from "react-countdown";
import styled from "styled-components";
import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { MintButton } from "./MintButton";
import { useWallet, useAnchorWallet } from "@solana/wallet-adapter-react";
import { GatewayProvider } from "@civic/solana-gateway-react";
import { Snackbar, Paper, LinearProgress, Chip } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Container from "@mui/material/Container";
import { toDate, AlertState, getAtaForMint } from "./utils";
import "./FeaturedLaunch.css";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import {
    awaitTransactionSignatureConfirmation,
    CandyMachineAccount,
    CANDY_MACHINE_PROGRAM,
    getCandyMachineState,
    mintOneToken,
} from "./candy-machine";
import CounterInput from "./react-counter-input";

const ConnectButton = styled(WalletDialogButton)`
    width: 100%;
    height: 60px;
    margin-top: 10px;
    margin-bottom: 5px;
    background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
    color: white;
    font-size: 16px;
    font-weight: bold;
`;

const MintContainer = styled.div``;
interface Props {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

export interface HomeProps {
    candyMachineId?: anchor.web3.PublicKey;
    connection: anchor.web3.Connection;
    txTimeout: number;
    rpcHost: string;
}

const FeaturedLaunch = (props: HomeProps) => {
    const [isUserMinting, setIsUserMinting] = useState(false);
    const [itemsAvailable, setItemsAvailable] = useState(0);
    const [itemsRedeemed, setItemsRedeemed] = useState(0);
    const [itemsRemaining, setItemsRemaining] = useState(0);
    const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
    const [alertState, setAlertState] = useState<AlertState>({
        open: false,
        message: "",
        severity: undefined,
    });
    const [isWhitelisted, SetWhitelisted] = useState(false);
    const [api_url, setUrl] = useState(process.env.REACT_APP_API_URL);

    const rpcUrl = props.rpcHost;
    const wallet = useWallet();
    const wallets = useAnchorWallet();
    const anchorWallet = useMemo(() => {
        if (
            !wallet ||
            !wallet.publicKey ||
            !wallet.signAllTransactions ||
            !wallet.signTransaction
        ) {
            return;
        }

        return {
            publicKey: wallet.publicKey,
            signAllTransactions: wallet.signAllTransactions,
            signTransaction: wallet.signTransaction,
        } as anchor.Wallet;
    }, [wallet]);

    const refreshCandyMachineState = useCallback(async () => {
        if (!anchorWallet) {
            return;
        }

        if (props.candyMachineId) {
            try {
                const cndy = await getCandyMachineState(
                    anchorWallet,
                    props.candyMachineId,
                    props.connection,
                );
                setCandyMachine(cndy);
                setItemsAvailable(cndy.state.itemsAvailable);
                setItemsRemaining(cndy.state.itemsRemaining);
                setItemsRedeemed(cndy.state.itemsRedeemed);
            } catch (e) {
                console.log("There was a problem fetching Candy Machine state");
                console.log(e);
            }
        }
    }, [anchorWallet, props.candyMachineId, props.connection]);

    const onMint = async () => {
        try {
            let res = await fetch(
                `${api_url}/whitelisted/member/${(wallets as anchor.Wallet).publicKey.toString()}`,
                { method: "GET" },
            );
            const res_json = await res.json();
            const res_num = await JSON.parse(JSON.stringify(res_json)).reserve; //The number  of reserves the user has left
            if (!isWhitelisted) {
                throw new Error("You are not whitelisted");
            }
            if (res_num - 1 < 0) {
                console.log("confirmed");
                throw new Error("Not enough reserves");
            }
            setIsUserMinting(true);
            document.getElementById("#identity")?.click();
            if (wallet.connected && candyMachine?.program && wallet.publicKey) {
                const mintTxId = (await mintOneToken(candyMachine, wallet.publicKey))[0];

                let status: any = { err: true };
                if (mintTxId) {
                    status = await awaitTransactionSignatureConfirmation(
                        mintTxId,
                        props.txTimeout,
                        props.connection,
                        true,
                    );
                }

                if (status && !status.err) {
                    setAlertState({
                        open: true,
                        message: "Congratulations! Mint succeeded!",
                        severity: "success",
                    });
                    const to_send = await JSON.stringify({ reserve: res_num - 1 });
                    await fetch(
                        `${api_url}/whitelisted/update/${(
                            wallets as anchor.Wallet
                        ).publicKey.toString()}/${process.env.REACT_APP_SECRET_KEY}`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: to_send,
                        },
                    );
                } else {
                    setAlertState({
                        open: true,
                        message: "Mint failed! Please try again!",
                        severity: "error",
                    });
                }
            }
        } catch (error: any) {
            let message = error.msg || "Minting failed! Please try again!";
            if (!error.msg) {
                if (!error.message) {
                    message = "Transaction Timeout! Please try again.";
                } else if (error.message.indexOf("0x137")) {
                    message = `SOLD OUT!`;
                } else if (error.message.indexOf("0x135")) {
                    message = `Insufficient funds to mint. Please fund your wallet.`;
                }
            } else {
                if (error.code === 311) {
                    message = `SOLD OUT!`;
                    window.location.reload();
                } else if (error.code === 312) {
                    message = `Minting period hasn't started yet.`;
                }
            }

            setAlertState({
                open: true,
                message,
                severity: "error",
            });
        } finally {
            setIsUserMinting(false);
        }
    };

    useEffect(() => {
        refreshCandyMachineState();
    }, [anchorWallet, props.candyMachineId, props.connection, refreshCandyMachineState]);

    const [quantity, setQuantity] = useState(0);
    const basePrice = 0.4;
    const handleQuantityChange = (count: number) => {
        setQuantity(count);
        console.log(quantity);
    };

    useEffect(() => {
        refreshCandyMachineState();
    }, [anchorWallet, props.candyMachineId, props.connection, refreshCandyMachineState]);

    const currentDate = new Date(new Date().toUTCString()).getTime();
    const launchDate = new Date(Date.UTC(2022, 1, 14, 14, 0, 0, 0)).getTime();

    const renderer: FC<Props> = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return (
                <ConnectButton
                    className="featured__launch__button"
                    style={{ width: "33%", fontSize: "larger", margin: "auto" }}
                >
                    Connect Wallet
                </ConnectButton>
            );
        } else {
            // Render a countdown
            return (
                <span
                    style={{
                        color: "#4D2D2E",
                        fontWeight: 1000,
                        fontSize: "1.5rem",
                        margin: "auto",
                        marginTop:"5px",
                        width: "90%",
                        height: "60px",
                        paddingTop: "15px",
                        paddingLeft:"70px",
                        background:
                            "linear-gradient(180deg, rgb(173 160 255) 0%, rgb(170 198 226) 100%)",
                    }}
                >
                    {hours} Hours | {minutes} Minutes | {seconds} Seconds
                </span>
            );
        }
    };
    return (
        // <Container>
        //     <div className="featuredlaunch_container">
        //         <div className="featuredlaunch_leftCol">
        //             <div className="featuredlaunch_tag">FEATURED LAUNCH</div>
        //             <div className="featuredLaunch_name">
        //                MetaCops Mint
        //             </div>
        //             <div className="featuredlaunch_clipboard">
        //                 <div className="featuredlaunch_box">
        //                     <span>ITEMS</span>
        //                     <div className="featuredlaunch_quantity">2911</div>
        //                 </div>
        //                 <div className="featuredlaunch_box">
        //                     <span>PRICE</span>
        //                     <div className="featuredlaunch_quantity">TBA</div>
        //                 </div>
        //             </div>
        //             <p>METACOPS have the power to control corrupt projects on the solana blockchain from Februry 2022.</p>
        //             <Button
        //                 variant="contained"
        //                 className="featured__launch__button"
        //                 style={{ width: "33%", fontSize: "larger" }}
        //             >
        //                 Select Wallet
        //             </Button>
        //         </div>
        //         <div className="featuredlaunch_rightCol">
        //             <img
        //                 src="https://dl.airtable.com/.attachmentThumbnails/76c408ed3162a12f78a74b9b0f859334/833938fa"
        //                 alt="NFT"
        //                 width="300px"
        //             />
        //         </div>
        //     </div>
        // </Container>
        <Container>
            <Container>
                <Paper>
                    {!wallet.connected ? (
                        <div className="featuredlaunch_container">
                            <div className="featuredlaunch_leftCol">
                                <div className="featuredlaunch_tag">EARLY-BIRD-SALE: LIVE</div>
                                <div className="featuredLaunch_name">MetaCops911 Mint</div>
                                <div className="featuredlaunch_clipboard">
                                    <div className="featuredlaunch_box">
                                        <span>METACOPS SUPPLY</span>
                                        <div className="featuredlaunch_quantity">2911</div>
                                    </div>
                                    <div className="featuredlaunch_box">
                                        <span>EARLY BIRD PRICE</span>
                                        <div className="featuredlaunch_quantity">0.4 Sol</div>
                                    </div>
                                </div>
                                <p>
                                    METACOPS have the power to control corrupt projects and web3
                                    scammers on the solana blockchain.
                                </p>

                                <Countdown
                                    date={currentDate + (launchDate - currentDate)}
                                    renderer={renderer}
                                />

                                <h2 style={{ marginBottom: "15px", margin: "auto" }}>
                                    {wallet && <h2>Early Bird Supply : 400</h2>}
                                </h2>
                            </div>
                            <div className="">
                                <img
                                    src="https://media.discordapp.net/attachments/936604605767360563/942682678971498566/preview.gif"
                                    alt="NFT"
                                    width="300px"
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <MintContainer>
                                {candyMachine?.state.isActive &&
                                candyMachine?.state.gatekeeper &&
                                wallet.publicKey &&
                                wallet.signTransaction ? (
                                    <GatewayProvider
                                        wallet={{
                                            publicKey:
                                                wallet.publicKey ||
                                                new PublicKey(CANDY_MACHINE_PROGRAM),
                                            //@ts-ignore
                                            signTransaction: wallet.signTransaction,
                                        }}
                                        gatekeeperNetwork={
                                            candyMachine?.state?.gatekeeper?.gatekeeperNetwork
                                        }
                                        clusterUrl={rpcUrl}
                                        options={{ autoShowModal: false }}
                                    >
                                        <MintButton
                                            candyMachine={candyMachine}
                                            isMinting={isUserMinting}
                                            onMint={onMint}
                                        />
                                    </GatewayProvider>
                                ) : (
                                    <div className="featuredlaunch_container">
                                        <div className="featuredlaunch_leftCol">
                                            <div className="featuredlaunch_tag">
                                                EARLY-BIRD-SALE: LIVE
                                            </div>
                                            <div className="featuredLaunch_name">
                                                MetaCops911 Mint
                                            </div>
                                            <div className="featuredlaunch_clipboard">
                                                <div className="featuredlaunch_box">
                                                    <span>METACOPS SUPPLY</span>
                                                    <div className="featuredlaunch_quantity">
                                                        2911
                                                    </div>
                                                </div>
                                                <div className="featuredlaunch_box">
                                                    <span>EARLY BIRD PRICE</span>
                                                    <div className="featuredlaunch_quantity">
                                                        0.4 Sol
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                METACOPS have the power to control corrupt projects
                                                and web3 scammers on the solana blockchain.
                                            </p>
                                            <CounterInput
                                                min={0}
                                                max={1}
                                                wrapperStyle={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    maxWidth: "100%",
                                                }}
                                                btnStyle={{
                                                    fontSize: "30px",
                                                    fontWeight: "700",
                                                    margin: "0 1rem",
                                                }}
                                                inputStyle={{
                                                    alignItems: "center",
                                                    focus: "none",
                                                    outline: "2px solid ",
                                                    borderRadius: "8px",
                                                    width: "50%",
                                                    height: "40px",
                                                    fontWeight: "700",
                                                    padding: "1rem 0",
                                                    minWidth: "10rem",
                                                    fontSize: "2rem",
                                                }}
                                                onCountChange={handleQuantityChange}
                                            />
                                            <h5
                                                style={{
                                                    margin: "auto",
                                                    fontSize: "16px",
                                                    marginBottom: "-5px",
                                                }}
                                            >
                                                *( 1 Mint Per Transaction )
                                            </h5>

                                            <h2
                                                className="text-2xl"
                                                style={{ marginBottom: "-35px", margin: "auto" }}
                                            >
                                                ~ {quantity * basePrice} SOL
                                            </h2>
                                            <MintButton
                                                candyMachine={candyMachine}
                                                isMinting={isUserMinting}
                                                onMint={onMint}
                                            />
                                            <h2 style={{ marginBottom: "-35px", margin: "auto" }}>
                                                {wallet && (
                                                    <h2>
                                                        Remaining Supply : {itemsRemaining - 2511}
                                                    </h2>
                                                )}
                                            </h2>
                                            <h2 style={{ margin: "auto" }}>
                                                {wallet && <h2>Early Bird Supply : 400</h2>}
                                            </h2>
                                        </div>
                                        <div className="">
                                            <img
                                                src="https://media.discordapp.net/attachments/936604605767360563/942682678971498566/preview.gif"
                                                alt="NFT"
                                                width="300px"
                                            />
                                        </div>
                                    </div>
                                )}
                            </MintContainer>
                        </>
                    )}
                </Paper>
            </Container>

            <Snackbar
                open={alertState.open}
                autoHideDuration={6000}
                onClose={() => setAlertState({ ...alertState, open: false })}
            >
                <Alert
                    onClose={() => setAlertState({ ...alertState, open: false })}
                    severity={alertState.severity}
                >
                    {alertState.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default FeaturedLaunch;
