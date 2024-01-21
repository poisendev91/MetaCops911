import React from "react";
import { Grid, Divider, Tab, Tabs, Box, Typography } from "@mui/material";
import LowerDiv from "./LowerDiv";

import astro from "../../assets/swat.png";
import "./CollectionUI.css";

const Item = (props) => {
    return <div className="explore-item">{props.children}</div>;
};

const Explore = () => {
    return (
        <div className="explore-main-div">
            <div className="explore-upper-div">
                <img src={astro} className="explore-avatar-div"></img>
                <h1>METACOPS NFT COLLECTION</h1>
                <Grid container spacing={1} rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6} sx={2} sm={4} md={3}>
                        <Item>
                            <div>TOTAL ITEMS</div>
                            <div>911</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sx={2} sm={4} md={3}>
                        <Item>
                            <div>FLOOR PRICE</div>
                            <div>Launching Soon</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sx={2} sm={4} md={3}>
                        <Item>
                            <div>Total Owners</div>
                            <div>0</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sx={2} sm={4} md={3}>
                        <Item>
                            <div>$MCOP SUPPLY</div>
                            <div>10,00,00,000</div>
                        </Item>
                    </Grid>
                </Grid>
                <p className="explore-upper-p">
                In the digital realm, there existed extraordinary beings known as Metacops! 🚀<br/>

These friendly superheroes, armed with smart computer brains, embarked on a mission to make the online world safer and more enjoyable for everyone. 🌐<br/>

Picture them as digital superheroes patrolling the internet streets, ready to assist anyone feeling lost or confused in the vast digital landscape. 🦸‍♂️
                </p>
            </div>{" "}
            {/* explore-upper-div */}
            <Divider />
            <LowerDiv /> {/* explore-lower-div */}
        </div>
    );
};

export default Explore;
