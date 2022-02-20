import React from "react";
import Container from "@mui/material/Container";
import Slideshow from "./Slideshow";
import Astro from "../../assets/astro.png";
import clothingCollection from "../../assets/army.png";
import vehicleCollection from "../../assets/sherrif.png";
import firearmCollection from "../../assets/swat.png";
import "./Carousel.css";
import instagram from '../../assets/instagram.png'

const data = [
    {
        head: "big-bang",
        img: clothingCollection,
        para: "Web3 Master",
        instagramid:"https://www.instagram.com/shubham_kunwar__/"
    },
    {
        head: "Mugambow ",
        img: vehicleCollection,
        para: "Marketing guru",
        instagramid:"https://www.instagram.com/vishalshukla.22/"
    },
    {
        head: "Page-7",
        img: firearmCollection,
        para: "Virtual Artist",
        instagramid:"https://www.instagram.com/saint.n.sinner._/"
    },
   
];

const Carousel = () => {
    return (
        <Container style={{paddingBottom:"50px"}}>
            <h1>
                <b>Meet The Team 🚀</b>
            </h1>
            <Slideshow show={3}>
                {data.map((item) => {
                    return (
                        <div>
                            <div style={{ padding: 8 }}>
                                <img
                                    src={item.img}
                                    alt="placeholder"
                                    style={{ width: "100%", borderRadius: "12px" }}
                                />
                                <div
                                    style={{
                                        textAlign: "center",
                                        backgroundColor: "rgb(98, 78, 213)",
                                        borderRadius: "12px",
                                        color: "white",
                                        marginTop: "-15px",
                                        padding: "10px 0",
                                    }}
                                >
                                     <a
                  href={item.instagramid}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img  className="hot-boxes-logo"
                    src={instagram}
                    alt="placeholder"
                   
                  />
                </a>
                                    <h3 style={{ color: "white", textAlign: "center", marginTop:"10px !important" }}>
                                        {item.head}
                                    </h3>
                                    <span style={{ color: "black", textAlign: "center" }}>
                                        {item.para}
                                    </span>
                                  
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div>
                    <div style={{ padding: 8 }}>
                        <img
                            src="https://via.placeholder.com/300x300"
                            alt="placeholder"
                            style={{ width: "100%" }}
                        />
                        <div
                            style={{
                                textAlign: "center",
                                backgroundColor: "purple",
                                color: "white",
                                padding: "10px 0",
                            }}
                        >
                            TEXT HERE
                        </div>
                    </div>
                </div>
            </Slideshow>
        </Container>
    );
};

export default Carousel;
