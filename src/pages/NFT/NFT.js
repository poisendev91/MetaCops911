import React from "react";
import Container from "@mui/material/Container";

import UpperLeftCol from "./components/UpperLeftCol/UpperLeftCol";
import UpperRightCol from "./components/UpperRightCol/UpperRightCol";
import NoOffersYet from "./components/NoOffersYet/NoOffersYet";
import Activities from "./components/Activities/Activities";
import More from "./components/More/More";

import "./NFT.css";

const NFT = () => {
    return (
        <div style={{ backgroundColor: "#09080d", padding: "50px 0" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "10px",
                    flexWrap: "wrap",
                    flexDirection: "column"
                }}
            >
                <Container
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "40px",
                        flexWrap: "wrap",
                    }}
                >
                    <UpperLeftCol />
                    <UpperRightCol />
                </Container>
                <NoOffersYet />
                <Activities/>
                <More/>
            </div>
        </div>
    );
};

export default NFT;
