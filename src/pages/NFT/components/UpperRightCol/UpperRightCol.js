import React from "react";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ShareIcon from "@mui/icons-material/Share";


import CurrentPrice from './CurrentPrice/CurrentPrice'
import Attributes from './Attributes/Attributes'
import About from './About/About'
import Details from './Details/Details'
import "./UpperRightCol.css"

const UpperRightCol = () => {
    const [wallet] = React.useState(true);
    const [owned] = React.useState(true);

    return (
        <div className="upperrightcol_container">
            {owned ? (
                <div style={{ textAlign: "right" }}>
                    <select className="upperrightcol_select">
                        <option className="upperrightcol_select" value="options">
                            Options:
                        </option>
                        <option className="upperrightcol_select" value="delist">
                            Delist
                        </option>
                        <option className="upperrightcol_select" value="gift">
                            Gift
                        </option>
                        <option className="upperrightcol_select" value="Edit">
                            Edit
                        </option>
                    </select>
                </div>
            ) : null}
            <h1 style={{ color: "white", fontWeight: "600" }}>Solanaut #74</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <div style={{ color: "#7d46f7", fontSize: "18px" }}>
                    <VerifiedUserOutlinedIcon />
                    &nbsp;&nbsp;&nbsp;Zero G Labs: Solanauts
                </div>
                <div style={{ color: "#7d46f7", fontSize: "18px" }}>
                    <ShareIcon />
                    &nbsp;&nbsp;&nbsp;Share
                </div>
            </div>
            <CurrentPrice wallet={wallet} />
            <About />
            <Attributes />
            <Details />
        </div>
    );
};

export default UpperRightCol;
