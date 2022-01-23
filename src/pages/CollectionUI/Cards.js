import React from 'react';
import Collection from "../../assets/collection.png";
const data = [
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

const Cards = (props) => {
    console.log(props);
    return (
        <div className="cards">
            {data.map((item, index) => {
                return (
                    <div className="hot_box" style={{ width: props.numberOfGrid === 4 ? "250px" : "175px" }}>
                        {/* <Favourite num={idx} /> */}
                        <img src={item.img} />
                        {/* <Link to={`/profile/${idx + 1}`}> */}
                        <h3 style={{ textAlign: "center" }}>{item.head}</h3>
                        <span style={{ textAlign: "center", display: "flex" }}>{item.para}</span>
                        <h4 style={{ textAlign: "left" }}>185 Sol</h4>
                        {/* </Link> */}
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;