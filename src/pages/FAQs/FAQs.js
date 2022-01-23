import React, { useState } from "react";
import { DataFaqsBuyerSellers, DataFaqsCreaters } from "./Data";
import AnswerSVG from "../../assets/AFaqs.svg";
import QuestionSVG from "../../assets/QFaqs.svg";

import "./FAQs.css";

const FAQs = () => {
    const [link1, setLink1] = useState(true);
    const [link2, setLink2] = useState(false);
    const handleClick = () => {
        setLink1(!link1);
        setLink2(!link2);
    };
    return (
        <div className="faqs___section">
            <div className="w-full">
                <ul className="faq___tablist" role="tablist">
                    <li>
                        <a
                            className={`tab ${link1 && "active"} `}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                            onClick={handleClick}
                        >
                            Buyers/Sellers
                        </a>
                    </li>
                    <li>
                        <a
                            className={`tab ${link2 && "active"} `}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                            onClick={handleClick}
                        >
                            Creators
                        </a>
                    </li>
                </ul>
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
    );
};

export default FAQs;
