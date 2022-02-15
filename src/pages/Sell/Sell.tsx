import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "./Sell.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Profile = () => {
    return (
        <div className="landing_container">
            <Container>
                <h1 style={{ color: "white", margin: "0" }}>ROADMAP</h1>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "rgb(98,78,213)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                        date="Current Phase"
                        iconStyle={{ background: "green", color: "#fff" }}
                       
                    >
                        <h3 className="vertical-timeline-element-title">1st STAGE</h3>
                        <ul>
                            <li>
                                Introducing website, Twitter and discord.
                            </li>
                            <li>
                                Building Community and raising awareness to NFT staking.
                            </li>
                            <li>
                                Opening pre-sale whitelist for discord members.
                            </li>
                            <li>
                                Contests to win NFT(at most 1), 50 total contest.
                            </li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "rgb(98,78,213)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                        date=""
                        iconStyle={{ background: "green", color: "#fff" }}
                       
                    >
                        <h3 className="vertical-timeline-element-title">2nd STAGE</h3>
                        <ul>
                            <li>
                                Airdrops and giveawyas to discord members.
                            </li>
                            <li>
                               Minting will be opened for pre-sale and public sale.
                            </li>
                            <li>
                                80% Verified METACOPS has been minted and NFT holders can login to stake your own NFT's.
                            </li>
                            <li>
                                Sweep floor initiative 20% Community funds to keep floor pricing high.
                            </li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "rgb(98,78,213)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                        date=""
                        iconStyle={{ background: "red", color: "#fff" }}
                       
                    >
                        <h3 className="vertical-timeline-element-title">3rd STAGE</h3>
                        <ul>
                            <li>
                                Introducing $MCOP, our utility token.
                            </li>
                            <li>
                               Distribution of $MCOP to the people staking Metacops Nft.
                            </li>
                            <li>
                               Introducing breeding of the NFT's, and providing Serum to breed METACOPS.
                            </li>
                            <li>
                                Community Funds to be used to buy land in SANDBOX to build a METACOPS holder club.
                                
                            </li>
                            <li>
                            All holders will have direct invitation to our Meta-Festivals.
                            </li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "rgb(98,78,213)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                        date=""
                        iconStyle={{ background: "red", color: "#fff" }}
                       
                    >
                        <h3 className="vertical-timeline-element-title">4th STAGE</h3>
                        <ul>
                            <li>
                                Launching of Metacops Fun to Earn game.
                            </li>
                            <li>
                                Introducing our own DAOs to community and providing governence to NFT holders.
                            </li>
                            <li>
                                First glimpse👀 to our own Metaverse in Solana.
                            </li>
                            
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: "black", color:"#fff"}}
                    />
                </VerticalTimeline>
            </Container>
        </div>
    );
};

export default Profile;
