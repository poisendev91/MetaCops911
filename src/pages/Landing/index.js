import React from "react";
import Hero from "../../components/Hero/Hero";
import Hot from "../../components/Hot Collection/Hot";
import Carousel from "../../components/Carousel/Carousel";
import LatestSale from "../../components/LatestSale/LatestSale";
import "./style.css";

const index = () => {
    return (
        <div className="landing_container">
            <Hero />
            <Hot />
            <LatestSale />
            {/* <Carousel /> */}
        </div>
    );
};

export default index;
