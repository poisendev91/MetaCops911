import React from "react";

import "./LowerLeft.css";
import Table from "./Table";

const LowerLeft = () => {
    return (
        <div
            style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}
        >
            <div className="lowerleft_leftCol">
                <div className="lowerleft_leftCol_duals">
                    <span style={{ fontSize: "10px", textAlign: "center" }}>MRR</span>
                    <h1>$374.2k</h1>
                </div>
                <div className="lowerleft_leftCol_duals_twice">
                    <div className="lower_boxed">
                        <span style={{ fontSize: "10px", textAlign: "center" }}>
                            ACTIVE SUBSCRIPTIONS
                        </span>
                        <h1>2,294</h1>
                    </div>
                    <div className="lower_boxed">
                        <span style={{ fontSize: "10px", textAlign: "center" }}>
                            ACTIVE SUBSCRIPTIONS
                        </span>
                        <h1>2,294</h1>
                    </div>
                </div>
            </div>
            <div className="lowerleft_rightCol">
                <Table />
            </div>
        </div>
    );
};

export default LowerLeft;
