import React from "react";
import { Grid, Divider, Tab, Tabs, Box, Typography } from "@mui/material";
import LowerDiv from "./LowerDiv";

import astro from "../../assets/astro.png";
import "./CollectionUI.css";

const Item = (props) => {
    return <div className="explore-item">{props.children}</div>;
};

const Explore = () => {
    return (
        <div className="explore-main-div">
            <div className="explore-upper-div">
                <img src={astro} className="explore-avatar-div"></img>
                <h1>Boryoku Dragonz</h1>
                <Grid container spacing={1} rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6} xs={2} sm={4} md={3}>
                        <Item>
                            <div>FLOOR PRICE</div>
                            <div>$1,000</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} xs={2} sm={4} md={3}>
                        <Item>
                            <div>FLOOR PRICE</div>
                            <div>$1,000</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} xs={2} sm={4} md={3}>
                        <Item>
                            <div>FLOOR PRICE</div>
                            <div>$1,000</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} xs={2} sm={4} md={3}>
                        <Item>
                            <div>FLOOR PRICE</div>
                            <div>$1,000</div>
                        </Item>
                    </Grid>
                </Grid>
                <p className="explore-upper-p">
                    Boryoku Dragonz Are An Exclusive Collection Of 1,111 Dragon NFTs On Solana,
                    Backed By A Top Team Of NFT Collectors, Designers, Community Builders, And
                    Artists. The Project Brings A Fresh Design To Solana, With Daily Token Airdrops,
                    A Breeding Game With Token Burning Mechanics, And A Multi-Chain Community That
                    Completely Transcends A Simple PFP Offering.
                </p>
            </div>{" "}
            {/* explore-upper-div */}
            <Divider />
            <LowerDiv /> {/* explore-lower-div */}
        </div>
    );
};

export default Explore;
