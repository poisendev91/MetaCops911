import React from "react";
import Collection from "../../assets/collection.png";
import Container from "@mui/material/Container";
import "./AllCollection.css";

const AllCollection = () => {
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
    ];
    return (
        <Container style={{ paddingBottom: "50px" }}>
            <div className="allCollection_container">
                <h1>All Collections</h1>
                <div className="allCollection_boxes_container">
                    {datas.map((data, idx) => (
                        <div className="allCollection_box">
                            <img src={data.img} width="100%" style={{ borderRadius: "20px" }} />
                            <h3 style={{ color: "white" }}>{data.head}</h3>
                            <span style={{ textAlign: "center", color: "#a199a6" }}>
                                {data.para}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default AllCollection;
