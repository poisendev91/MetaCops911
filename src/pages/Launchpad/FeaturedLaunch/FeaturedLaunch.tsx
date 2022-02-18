import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import confetti from "./canvas-confetti";
import * as anchor from "@project-serum/anchor";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { GatewayProvider } from "@civic/solana-gateway-react";
import Countdown from "react-countdown";
import { Snackbar, Paper, LinearProgress, Chip } from "@material-ui/core";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import Alert from "@material-ui/lab/Alert";
import { toDate, AlertState, getAtaForMint } from "./utils";
import { MintButton } from "./MintButton";
import "./FeaturedLaunch.css";
import CounterInput from "./react-counter-input";
import {
    CandyMachine,
    awaitTransactionSignatureConfirmation,
    getCandyMachineState,
    mintOneToken,
    CANDY_MACHINE_PROGRAM,
} from "./candy-machine";
import Container from "@mui/material/Container";
const cluster = process.env.REACT_APP_SOLANA_NETWORK!.toString();
const decimals = process.env.REACT_APP_SPL_TOKEN_TO_MINT_DECIMALS
    ? +process.env.REACT_APP_SPL_TOKEN_TO_MINT_DECIMALS!.toString()
    : 9;
const splTokenName = process.env.REACT_APP_SPL_TOKEN_TO_MINT_NAME
    ? process.env.REACT_APP_SPL_TOKEN_TO_MINT_NAME.toString()
    : "TOKEN";

const CountDowns = styled(Countdown)`
    margin-left: 140px;
`;

const WalletAmount = styled.div`
    color: white;
    width: auto;
    padding: 2px 0px 2px 10px;
    min-width: 48px;
    min-height: auto;
    border-radius: 22px;
    background-color: var(--main-text-color);
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%),
        0px 1px 18px 0px rgb(0 0 0 / 12%);
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 500;
    line-height: 1.75;
    text-transform: uppercase;
    border: 0;
    margin: 0;
    display: inline-flex;
    outline: 0;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: flex-start;
    gap: 10px;
`;

const BorderLinearProgress = styled(LinearProgress)`
    margin: 10px 0;
    height: 10px !important;
    border-radius: 30px;
    border: 2px solid black;
    box-shadow: 5px 5px 40px 5px rgba(0, 0, 0, 0.5);

    > div.MuiLinearProgress-barColorPrimary {
        background-color: white !important;
    }
    > div.MuiLinearProgress-bar1Determinate {
        border-radius: 30px !important;
        background-image: linear-gradient(
            270deg,
            rgba(255, 255, 255, 0.01),
            rgba(255, 255, 255, 0.5)
        );
    }
`;

const Wallet = styled.ul`
    flex: 0 0 auto;
    margin: 0;
    padding: 0;
`;

const ConnectButton = styled(WalletMultiButton)`
    border-radius: 18px !important;
    padding: 6px 16px;
    background-color: #4e44ce;
    margin: 0 auto;
`;
const MintButtonContainer = styled.div`
    button.MuiButton-contained:not(.MuiButton-containedPrimary).Mui-disabled {
        color: #464646;
    }

    button.MuiButton-contained:not(.MuiButton-containedPrimary):hover,
    button.MuiButton-contained:not(.MuiButton-containedPrimary):focus {
        -webkit-animation: pulse 1s;
        animation: pulse 1s;
        box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
    }

    @-webkit-keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 #ef8f6e;
        }
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 #ef8f6e;
        }
    }
`;

const Card = styled(Paper)`
    display: inline-block;
    background-color: var(--card-background-lighter-color) !important;
    margin: auto;
    padding: 12px;
    padding-bottom: 4px;
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
    candyMachineId: anchor.web3.PublicKey;
    connection: anchor.web3.Connection;
    txTimeout: number;
    rpcHost: string;
}

const Home = (props: HomeProps) => {
    const [balance, setBalance] = useState<number>();
    const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
    const [isActive, setIsActive] = useState(false); // true when countdown completes or whitelisted
    const [solanaExplorerLink, setSolanaExplorerLink] = useState<string>("");
    const [itemsAvailable, setItemsAvailable] = useState(0);
    const [itemsRedeemed, setItemsRedeemed] = useState(0);
    const [itemsRemaining, setItemsRemaining] = useState(0);
    const [isSoldOut, setIsSoldOut] = useState(false);
    const [payWithSplToken, setPayWithSplToken] = useState(false);
    const [price, setPrice] = useState(0);
    const [priceLabel, setPriceLabel] = useState<string>("SOL");
    const [whitelistPrice, setWhitelistPrice] = useState(0);
    const [whitelistEnabled, setWhitelistEnabled] = useState(false);
    const [whitelistTokenBalance, setWhitelistTokenBalance] = useState(0);
    const [isWhitelisted, SetWhitelisted] = useState(false);
    const [api_url, setUrl] = useState(process.env.REACT_APP_API_URL)

    const [alertState, setAlertState] = useState<AlertState>({
        open: false,
        message: "",
        severity: undefined,
    });

    const wallet = useAnchorWallet();
    const [candyMachine, setCandyMachine] = useState<CandyMachine>();

    const rpcUrl = props.rpcHost;

    const refreshCandyMachineState = () => {
        (async () => {
            if (!wallet) return;

            const cndy = await getCandyMachineState(
                wallet as anchor.Wallet,
                props.candyMachineId,
                props.connection,
            );

            setCandyMachine(cndy);
            setItemsAvailable(cndy.state.itemsAvailable - 2511);
            setItemsRemaining(cndy.state.itemsRemaining-2511);
            setItemsRedeemed(cndy.state.itemsRedeemed+14);

            var divider = 1;
            if (decimals) {
                divider = +("1" + new Array(decimals).join("0").slice() + "0");
            }

            // detect if using spl-token to mint
            if (cndy.state.tokenMint) {
                setPayWithSplToken(true);
                // Customize your SPL-TOKEN Label HERE
                // TODO: get spl-token metadata name
                setPriceLabel(splTokenName);
                setPrice(cndy.state.price.toNumber() / divider);
                setWhitelistPrice(cndy.state.price.toNumber() / divider);
            } else {
                setPrice(cndy.state.price.toNumber() / LAMPORTS_PER_SOL);
                setWhitelistPrice(cndy.state.price.toNumber() / LAMPORTS_PER_SOL);
            }

            // fetch whitelist token balance
            if (cndy.state.whitelistMintSettings) {
                setWhitelistEnabled(true);
                if (
                    cndy.state.whitelistMintSettings.discountPrice !== null &&
                    cndy.state.whitelistMintSettings.discountPrice !== cndy.state.price
                ) {
                    if (cndy.state.tokenMint) {
                        setWhitelistPrice(
                            cndy.state.whitelistMintSettings.discountPrice?.toNumber() / divider,
                        );
                    } else {
                        setWhitelistPrice(
                            cndy.state.whitelistMintSettings.discountPrice?.toNumber() /
                                LAMPORTS_PER_SOL,
                        );
                    }
                }
                let balance = 0;
                try {
                    const tokenBalance = await props.connection.getTokenAccountBalance(
                        (
                            await getAtaForMint(
                                cndy.state.whitelistMintSettings.mint,
                                wallet.publicKey,
                            )
                        )[0],
                    );

                    balance = tokenBalance?.value?.uiAmount || 0;
                } catch (e) {
                    console.error(e);
                    balance = 0;
                }
                setWhitelistTokenBalance(balance);
                setIsActive(balance > 0);
            } else {
                setWhitelistEnabled(false);
            }
        })();
    };

    function displaySuccess(mintPublicKey: any): void {
        let remaining = itemsRemaining - 1;
        setItemsRemaining(remaining);
        setIsSoldOut(remaining === 0);
        if (whitelistTokenBalance && whitelistTokenBalance > 0) {
            let balance = whitelistTokenBalance - 1;
            setWhitelistTokenBalance(balance);
            setIsActive(balance > 0);
        }
        setItemsRedeemed(itemsRedeemed + 1);
        const solFeesEstimation = 0.012; // approx
        if (!payWithSplToken && balance && balance > 0) {
            setBalance(balance - (whitelistEnabled ? whitelistPrice : price) - solFeesEstimation);
        }
        setSolanaExplorerLink(
            cluster === "devnet" || cluster === "testnet"
                ? "https://explorer.solana.com/address/" + mintPublicKey + "?cluster=" + cluster
                : "https://explorer.solana.com/address/" + mintPublicKey,
        );
        throwConfetti();
    }

    function throwConfetti(): void {
        confetti({
            particleCount: 400,
            spread: 70,
            origin: { y: 0.6 },
        });
    }

    const onMint = async () => {



       
          


        try {
            let res = await fetch(`${api_url}/whitelisted/member/${(wallet as anchor.Wallet).publicKey.toString()}`, {method: "GET"})
            const res_json = await res.json()
            const res_num = await JSON.parse(JSON.stringify(res_json)).reserve //The number  of reserves the user has left
            if(!isWhitelisted){
              throw new Error("You are not whitelisted");
            }
            if(res_num - 1 < 0){
              console.log("confirmed")
              throw new Error("Not enough reserves");
            }
            setIsMinting(true);
            document.getElementById("#identity")?.click();
            if (wallet && candyMachine?.program && wallet.publicKey) {
                const mint = anchor.web3.Keypair.generate();
                const mintTxId = (await mintOneToken(candyMachine, wallet.publicKey, mint))[0];

                let status: any = { err: true };
                if (mintTxId) {
                    status = await awaitTransactionSignatureConfirmation(
                        mintTxId,
                        props.txTimeout,
                        props.connection,
                        "singleGossip",
                        true,
                    );
                }

                if (!status?.err) {
                    setAlertState({
                        open: true,
                        message: "Congratulations! Mint succeeded!",
                        severity: "success",
                    });

                    // update front-end amounts
                    displaySuccess(mint.publicKey);
                } else {
                    setAlertState({
                        open: true,
                        message: "Mint failed! Please try again!",
                        severity: "error",
                    });
                }
            }
        } catch (error: any) {
            // TODO: blech:
            let message = error.msg || "You are not whitelisted. Join Discord to be eligible.";
            if (!error.msg) {
                if (!error.message) {
                    message = "Transaction Timeout! Please try again.";
                } else if (error.message.indexOf("0x138")) {
                } else if (error.message.indexOf("0x137")) {
                    message = `SOLD OUT!`;
                } else if (error.message.indexOf("0x135")) {
                    message = `Insufficient funds to mint. Please fund your wallet.`;
                }
            } else {
                if (error.code === 311) {
                    message = `SOLD OUT!`;
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
            setIsMinting(false);
        }
    };

    const renderCounter = ({ days, hours, minutes, seconds }: any) => {
        return (
            <div>
                <Card elevation={1}>
                    <h1>{days}</h1>
                    <br />
                    Days
                </Card>
                <Card elevation={1}>
                    <h1>{hours}</h1>
                    <br />
                    Hours
                </Card>
                <Card elevation={1}>
                    <h1>{minutes}</h1>
                    <br />
                    Mins
                </Card>
                <Card elevation={1}>
                    <h1>{seconds}</h1>
                    <br />
                    Secs
                </Card>
            </div>
        );
    };

    useEffect(() => {
        (async () => {
            if (wallet) {
                const balance = await props.connection.getBalance(wallet.publicKey);
                setBalance(balance / LAMPORTS_PER_SOL);
                const data = await fetch(`${api_url}/whitelisted/member/${(wallet as anchor.Wallet).publicKey.toString()}`)
                if(data.status.toString() !== "404"){
                  SetWhitelisted(true)
                }
                else{
                  console.log("not found")
                }
            }
        })();
    }, [wallet, props.connection]);

    useEffect(refreshCandyMachineState, [wallet, props.candyMachineId, props.connection]);

    const quantity = 1;
    const basePrice = 0.4;

    const currentDate = new Date(new Date().toUTCString()).getTime();
    const launchDate = new Date(Date.UTC(2022, 1, 17, 14, 55, 0, 0)).getTime();

    const renderer: FC<Props> = ({ days, hours, minutes, seconds, completed }) => {
        return (
            <div >
                <Card elevation={1}>
                    <h1>{days}</h1>
                    <br />
                    Days
                </Card>
                <Card elevation={1}>
                    <h1>{hours}</h1>
                    <br />
                    Hours
                </Card>
                <Card elevation={1}>
                    <h1>{minutes}</h1>
                    <br />
                    Mins
                </Card>
                <Card elevation={1}>
                    <h1>{seconds}</h1>
                    <br />
                    Secs
                </Card>
            </div>
        );
    };
    return (
        <main>
            <Container>
                <Paper>
                    <div className="featuredlaunch_container">
                        <div className="featuredlaunch_leftCol">
                            <div style={{ display: "flex" }}>
                                <div className="featuredlaunch_tag1">EARLY-BIRD-SALE: <br /> LIVE NOW</div>
                                <div className="featuredlaunch_tag " style={{ marginLeft: "10px" }}>
                                    {" "}
                                    <Wallet>
                                        {wallet ? (
                                            <WalletAmount>
                                                {(balance || 0).toLocaleString()} SOL
                                                <ConnectButton />
                                            </WalletAmount>
                                        ) : (
                                            <ConnectButton>Connect Wallet</ConnectButton>
                                        )}
                                    </Wallet>
                                </div>
                            </div>
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
                            <p style={{ paddingRight: "12px", justifyContent: "center" }}>
                                METACOPS have the power to control corrupt projects on the solana
                                blockchain. <br />
                                Mint a Metacop and start earning $MCOP.👇🏻
                            </p>

                            <div className="featured_launch_amount_box">
                                <input
                                    type="text"
                                    value="1"
                                    className="featured_launch_amount_value"
                                />
                            </div>
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
                            <MintButtonContainer>
                                {!isActive && candyMachine?.state.goLiveDate ? (
                                    <div style={{marginLeft:"30%",marginTop:"-30px"}}>

                                    <CountDowns
                                        date={currentDate + (launchDate - currentDate)}
                                        onMount={({ completed }) => completed && setIsActive(true)}
                                        onComplete={() => {
                                            setIsActive(true);
                                        }}
                                        renderer={renderCounter}
                                        />
                                        </div>
                                ) : !wallet ? (
                                    <ConnectButton>Connect Wallet</ConnectButton>
                                ) : candyMachine?.state.gatekeeper &&
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
                                        // // Replace with following when added
                                        // gatekeeperNetwork={candyMachine.state.gatekeeper_network}
                                        gatekeeperNetwork={
                                            candyMachine?.state?.gatekeeper?.gatekeeperNetwork
                                        } // This is the ignite (captcha) network
                                        /// Don't need this for mainnet
                                        clusterUrl={rpcUrl}
                                        options={{ autoShowModal: false }}
                                    >
                                        <MintButton
                                            candyMachine={candyMachine}
                                            isMinting={isMinting}
                                            isActive={isActive}
                                            isSoldOut={isSoldOut}
                                            onMint={onMint}
                                        />
                                    </GatewayProvider>
                                ) : (
                                    <MintButton
                                        candyMachine={candyMachine}
                                        isMinting={isMinting}
                                        isActive={isActive}
                                        isSoldOut={isSoldOut}
                                        onMint={onMint}
                                    />
                                )}
                            </MintButtonContainer>
                           
                            <h2
                                style={{ marginBottom: "15px", margin: "auto", marginTop: "-10px" }}
                            >
                                <h2>Early Bird Supply : 400</h2>
                            </h2>
                        </div>
                        
                        <div className="featuredlaunch_rightCol">
                            <img
                                src="https://media.discordapp.net/attachments/936604605767360563/942682678971498566/preview.gif"
                                alt="NFT"
                                width="300px"
                            />
                             {wallet && isActive && (
                                /* <p>Total Minted : {100 - (itemsRemaining * 100 / itemsAvailable)}%</p>}*/
                                <h3>
                                    TOTAL MINTED : {itemsRedeemed} / {itemsAvailable}
                                </h3>
                            )}
                            {wallet && isActive && (
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={100 - (itemsRemaining * 100) / itemsAvailable}
                                />
                            )}
                        </div>
                    </div>
                </Paper>
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
        </main>
    );
};

export default Home;
