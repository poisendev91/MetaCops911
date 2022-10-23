import React from "react";
import Collection from "../../assets/collection.png";
import Favourite from "./Favourite/Favourite";
import Slideshow from "../../components/Carousel/Slideshow";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

import "./Hot.css";

const datas = [
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
    },
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
    },
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
    },
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
    },
];

const getCardNumbers = () => {
    if (window.innerWidth <= 968 && window.innerWidth >= 685) {
        return 2;
    } else if (window.innerWidth <= 685) {
        return 1;
    } else {
        return 3;
    }
};

const Hot = () => {
    const handleClick = () => {
        window.open("https://opensea.io/assets/matic/0xcc407c43572b96be0ae774653d2a48e33ab49c3a/589");
      };
    const handleClick1 = () => {
        window.open("https://opensea.io/assets/matic/0x8a7fa136ba5947e0a1b181a04bd226dc7703d1f9/1564");
      };
    const handleClick2 = () => {
        window.open("https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/60515454364261058257348697429007391508733518058911570014890478499374320068368");
      };
    const handleClick3 = () => {
        window.open("https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/34383959384972671246569352700803382818071958574070564535352336369400164656912");
      };



    return (
        <Container style={{padding:"0px"}}>
            <h1>
                <b>Mint free NFT 🚀</b>
            </h1>
            <Slideshow >
               
                    <div>
                        <div style={{ display: "flex",padding: "1px"}}>
                            <div className="hot-box">
                            <h4>
                                Send Any 3 Worthless Nft to wallet 7yJpRjmTH9tYDt68pzGU68sHf3SjKNQsvEiCLJcoUT4u.
                         </h4>
                         <br/>
                         
                            </div>
                            <div className="hot-box">
                                <h4>
                                    You will recieve a Metacops Burnable Token to mint free NFT.
                                </h4>
                            </div>
                            <div className="hot-box">
                            <h4>
                             Also by having a free Metacop NFT you will get 1:1 version of the 3D Metacop NFT in our P2E game at later stage.
                         </h4>
                            </div>
                       
                          
                         
                           
                        </div>
                    </div>
                    
                    
            </Slideshow>
        </Container>
    );
};

export default Hot;
