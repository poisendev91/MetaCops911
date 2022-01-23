import React, { useState } from "react";
import Collection from "../../assets/collection2.png";
import Container from "@mui/material/Container";
import { DataFaqsBuyerSellers, DataFaqsCreaters } from "./Data";
import "./FAQs.css";
import AnswerSVG from "../../assets/AFaqs.svg";
import QuestionSVG from "../../assets/QFaqs.svg";

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
    const [link1, setLink1] = useState(true);
    const [link2, setLink2] = useState(false);
    const handleClick = () => {
        setLink1(!link1);
        setLink2(!link2);
    };
    return (
        <Container style={{ marginTop: "50px", paddingBottom: "50px" }}>
            <div className="hot_container">
                <h1>FAQ's 🌟</h1>
                <div className="faqs___section">
            <div className="w-full">
               
                <div className="relative flex flex-col min-w-0 w-full mb-6 shadow-lg rounded">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={link1 ? "block" : "hidden"} id="link1">
                                <ul className="faqs__quest__list rounded">
                                    {DataFaqsBuyerSellers.map((data, i) => (
                                        <>
                                            <li className="single-quest-faqs">
                                                <span>
                                                    {/* <QuestionSVG /> */}
                                                    <img src={QuestionSVG} alt="" />
                                                    <p className="quest___faq___quest">
                                                        {data.quest}
                                                    </p>
                                                </span>
                                                <span>
                                                    {/* <AnswerSVG /> */}
                                                    <img src={AnswerSVG} alt="" />
                                                    <p className="answer___faq___quest">
                                                        {data.ans}
                                                    </p>
                                                </span>
                                            </li>
                                        </>
                                    ))}
                                </ul>
                            </div>
                            <div className={link2 ? "block" : "hidden"} id="link2">
                                <ul className="faqs__quest__list rounded">
                                    {DataFaqsCreaters.map((data, i) => (
                                        <>
                                            <li className="single-quest-faqs">
                                                <span>
                                                    <img src={QuestionSVG} alt="" />
                                                    {/* <QuestionSVG /> */}
                                                    <p className="quest___faq___quest">
                                                        {data.quest}
                                                    </p>
                                                </span>
                                                <span>
                                                    {/* <AnswerSVG /> */}
                                                    <img src={AnswerSVG} alt="" />
                                                    <p className="answer___faq___quest">
                                                        {data.ans}
                                                    </p>
                                                </span>
                                            </li>
                                        </>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </Container>
    );
};

export default Hot;
