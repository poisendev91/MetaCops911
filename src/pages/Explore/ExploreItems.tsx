import React from "react";
import Collection from "../../assets/collection.png";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

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

const ExploreItems = () => {
    return (
        <Container style={{ marginBottom: "50px" }}>
            <div className="hot_container" style={{ backgroundColor: "transparent" }}>
                {/* <h1 style={{ color: "white" }}>Search</h1> */}
                <div className="hot_boxes_container">
                  <h2>In development</h2>
                </div>
            </div>
        </Container>
    );
};

export default ExploreItems;
