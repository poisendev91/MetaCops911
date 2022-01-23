import React from "react";
import "./stats.css";
import Container from "@mui/material/Container";
import ThreeHeadingBlock from "../../components/ThreeHeadingBlock/ThreeHeadingBlock";
import Table from "../../components/Table/Table";

 
const index = () => {
    return (
        <div className="stats_outer_containter">
            <Container>
                <div className = "stats_inner_container">
                    <h1 style={{ margin: "0", textAlign: "center" , color: "white" , padding:'10px 0'}}>
                        Statistics for all collection listed on altdeck
                    </h1>
                    <ThreeHeadingBlock/>
                    <Table/>
                </div>
            </Container>
        </div>
    );
};

export default index;
