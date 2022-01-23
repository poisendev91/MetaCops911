import React from "react";
import "./LowerRight.css";

import Table from "./Table.js";

const LowerRight = () => {
    return (
        <div
            style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}
        >
            <div className="lowerright_leftCol">
                <Table />
            </div>
            <div className="lowerright_rightCol">
                <Table />
            </div>
        </div>
    );
};

export default LowerRight;
