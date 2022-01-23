import React from "react";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Button from "@mui/material/Button";

const CurrentPrice = (props) => {
    return (
        <div
            style={{
                backgroundColor: "#1c1929",
                borderRadius: "20px",
                padding: "10px 20px",
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                gap: "10px",
            }}
        >
            <small style={{ color: "#7c8a8e", fontSize: "16px" }}>Current Price</small>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <LocalOfferOutlinedIcon
                    style={{ transform: "scale(1.8)", color: "#7d46f7", marginLeft: "5px" }}
                />
                <div style={{ color: "white", fontSize: "x-large" }}>10.088 SOL</div>
            </div>
            <Button
                variant="contained"
                style={{
                    backgroundColor: "#a4508b",
                    backgroundImage: "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)",
                    width: "100%",
                    fontSize: "larger",
                }}
            >
                {props.wallet ? "Buy" : "Connect Wallet"}
            </Button>
        </div>
    );
};

export default CurrentPrice;
