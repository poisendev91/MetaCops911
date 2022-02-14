import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { Grid } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Astro from "../../assets/astro.png";
import Collection from "../../assets/cop1.jpg";
import Collection2 from "../../assets/cop2.jpg";
import Collection3 from "../../assets/collection3.png";
const Hero = () => {
    return (
        <div>
            <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2 ">

            <div className="hero_outer_container" >
            
            <Grid container spacing={0}>
                <div className="hero_container" style={{marginLeft:"auto",marginRight:"auto"}}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div style={{ textAlign: "left" }}>
                            <h1 className="hero_head">
                                <b>
                                    The Innovative
                                    <br />
                                    
                                    METACOPS & $MCOP
                                    <br />
                                     Built with Solana.
                                </b>
                            </h1>
                            <div className="hero_right_col" style={{ marginLeft:"20px" }} >
                                <p className="hero_para" >
                                    A Solana NFT DAO Project that creates
                                    <br />
                                    new blockchain technology for staking and breeding of NFT's to be evolved.
                                </p>
                                <div className="hero_buttons">
                                    {/* <Link className="hero_btn1" to="/roadmap" activeStyle={{ fontWeight: "bold",}}>
                Roadmap
                </Link> */}
                                    <Link className="hero_btn2" to="/mint" activeStyle={{ fontWeight: "bold" }}>
                Mint Live
                </Link>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    
        <div className="hero_right_col">
        <Grid item  >
                        <div className="hero_four_boxes_container" style={{ overflow: "hidden" }}>
                            <div className="right-hero-div ">
                                <div style={{ display: "flex", flexDirection: "row" }}>
                            
                                    <img src={Collection} alt="hero" />
                                    <img src={Collection2} alt="hero" />
                                  
                                  
                                </div>
                                
                            </div>
                        </div>
                    </Grid>
        </div>
                </div>
            </Grid>
        </div>
        </div>
                                        </div>
    );
};

export default Hero;
