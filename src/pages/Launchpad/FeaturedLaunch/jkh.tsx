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
    CandyMachine,
    awaitTransactionSignatureConfirmation,
    getCandyMachineState,
    mintOneToken,
    CANDY_MACHINE_PROGRAM,
} from "./candy-machine";
import CounterInput from "./react-counter-input";
const cluster = process.env.REACT_APP_SOLANA_NETWORK!.toString();
const decimals = process.env.REACT_APP_SPL_TOKEN_TO_MINT_DECIMALS ? +process.env.REACT_APP_SPL_TOKEN_TO_MINT_DECIMALS!.toString() : 9;
const splTokenName = process.env.REACT_APP_SPL_TOKEN_TO_MINT_NAME ? process.env.REACT_APP_SPL_TOKEN_TO_MINT_NAME.toString() : "TOKEN";

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
    candyMachineId: anchor.web3.PublicKey;
    connection: anchor.web3.Connection;
    txTimeout: number;
    rpcHost: string;
}
const FeaturedLaunch = (props: HomeProps) => {
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
            props.connection
        );

        setCandyMachine(cndy);
        setItemsAvailable(cndy.state.itemsAvailable);
        setItemsRemaining(cndy.state.itemsRemaining);
        setItemsRedeemed(cndy.state.itemsRedeemed);

        var divider = 1;
        if (decimals) {
            divider = +('1' + new Array(decimals).join('0').slice() + '0');
        }

  

        // fetch whitelist token balance
       
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
    setSolanaExplorerLink(cluster === "devnet" || cluster === "testnet"
        ? ("https://explorer.solana.com/address/" + mintPublicKey + "?cluster=" + cluster)
        : ("https://explorer.solana.com/address/" + mintPublicKey));
};

const onMint = async () => {
    try {
        setIsMinting(true);
        document.getElementById('#identity')?.click();
        if (wallet && candyMachine?.program && wallet.publicKey) {
            const mint = anchor.web3.Keypair.generate();
            const mintTxId = (
                await mintOneToken(candyMachine, wallet.publicKey, mint)
            )[0];

            let status: any = {err: true};
            if (mintTxId) {
                status = await awaitTransactionSignatureConfirmation(
                    mintTxId,
                    props.txTimeout,
                    props.connection,
                    'singleGossip',
                    true,
                );
            }

            if (!status?.err) {
                setAlertState({
                    open: true,
                    message: 'Congratulations! Mint succeeded!',
                    severity: 'success',
                });

                // update front-end amounts
                displaySuccess(mint.publicKey);
            } else {
                setAlertState({
                    open: true,
                    message: 'Mint failed! Please try again!',
                    severity: 'error',
                });
            }
        }
    } catch (error: any) {
        // TODO: blech:
        let message = error.msg || 'Minting failed! Please try again!';
        if (!error.msg) {
            if (!error.message) {
                message = 'Transaction Timeout! Please try again.';
            } else if (error.message.indexOf('0x138')) {
            } else if (error.message.indexOf('0x137')) {
                message = `SOLD OUT!`;
            } else if (error.message.indexOf('0x135')) {
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


useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
]);

    const [quantity, setQuantity] = useState(0);
    const basePrice = 0.4;
    const handleQuantityChange = (count: number) => {
        setQuantity(count);
        console.log(quantity);
    };

    const currentDate = new Date(new Date().toUTCString()).getTime();
    const launchDate = new Date(Date.UTC(2022, 1, 14, 0, 0, 0, 0)).getTime();

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
                        paddingLeft:"40px",
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
        //             <div className="featuredlaunch_tag"> <Wallet>
        //                 {wallet ?
        //                     <WalletAmount>{(balance || 0).toLocaleString()} SOL<ConnectButton/></WalletAmount> :
        //                     <ConnectButton>Connect Wallet</ConnectButton>}
        //             </Wallet></div>
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
        //                     <div className="featuredlaunch_quantity">0.4 Sol</div>
        //                 </div>
        //             </div>
        //             <p>METACOPS have the power to control corrupt projects on the solana blockchain from Februry 2022.</p>
        //             <MintButtonContainer>
        //                         {!isActive && candyMachine?.state.goLiveDate ? (
        //                             <Countdown
        //                                 date={toDate(candyMachine?.state.goLiveDate)}
        //                                 onMount={({completed}) => completed && setIsActive(true)}
        //                                 onComplete={() => {
        //                                     setIsActive(true);
        //                                 }}
        //                                 renderer={renderCounter}
        //                             />) : (
        //                             !wallet ? (
        //                                     <ConnectButton>Connect Wallet</ConnectButton>
        //                                 ) :
        //                                 candyMachine?.state.gatekeeper &&
        //                                 wallet.publicKey &&
        //                                 wallet.signTransaction ? (
        //                                     <GatewayProvider
        //                                         wallet={{
        //                                             publicKey:
        //                                                 wallet.publicKey ||
        //                                                 new PublicKey(CANDY_MACHINE_PROGRAM),
        //                                             //@ts-ignore
        //                                             signTransaction: wallet.signTransaction,
        //                                         }}
        //                                         // // Replace with following when added
        //                                         // gatekeeperNetwork={candyMachine.state.gatekeeper_network}
        //                                         gatekeeperNetwork={
        //                                             candyMachine?.state?.gatekeeper?.gatekeeperNetwork
        //                                         } // This is the ignite (captcha) network
        //                                         /// Don't need this for mainnet
        //                                         clusterUrl={rpcUrl}
        //                                         options={{autoShowModal: false}}
        //                                     >
        //                                         <MintButton
        //                                             candyMachine={candyMachine}
        //                                             isMinting={isMinting}
        //                                             isActive={isActive}
        //                                             isSoldOut={isSoldOut}
        //                                             onMint={onMint}
        //                                         />
        //                                     </GatewayProvider>
        //                                 ) : (
        //                                     <MintButton
        //                                         candyMachine={candyMachine}
        //                                         isMinting={isMinting}
        //                                         isActive={isActive}
        //                                         isSoldOut={isSoldOut}
        //                                         onMint={onMint}
        //                                     />
        //                                 ))}
        //                     </MintButtonContainer>
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
           
                <Paper>
                    {!wallet ? (
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
                                <p>
                                    Mint a Metacop and start earning $MCOP.👇🏻 
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
                                           isMinting={isMinting}
                                           isActive={isActive}
                                           isSoldOut={isSoldOut}
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
                                                    <div className="featuredlaunch_quantity" style={{margin:"auto"}}>
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
                                               isMinting={isMinting}
                                               isActive={isActive}
                                               isSoldOut={isSoldOut}
                                               onMint={onMint}
                                            />
                                            
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













