import React from "react";
import "./FeaturedCollections.css";
import Collection from "../../assets/collection2.png";
import Container from "@mui/material/Container";
import Slideshow from "../Carousel/Slideshow";

const datas = [
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
        price: "1 sol",
    },
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
        price: "1 sol",
    },
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
        price: "1 sol",
    },
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
        price: "1 sol",
    },
];

const Hot = () => {
    return (
        <Container style={{ marginTop: "50px", paddingBottom: "50px" }}>
            <div className="hot_container">
                <h1>Featured Collections 🌟</h1>
                <div className="hot_boxes_container">
                    <Slideshow show={3}>
                        {datas.map((data, idx) => (
                            <div key={idx}>
                                <div style={{ padding: 8 }}>
                                    <img
                                        src="https://via.placeholder.com/300x300"
                                        alt="placeholder"
                                        style={{ width: "-webkit-fill-available" }}
                                    />
                                    <div
                                        style={{
                                            textAlign: "center",
                                            backgroundColor: "black",
                                            color: "white",
                                            padding: "10px 0",
                                        }}
                                    >
                                        {data.para}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slideshow>
                </div>
            </div>
        </Container>
    );
};

export default Hot;
