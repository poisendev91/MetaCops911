import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Checkbox from "@mui/material/Checkbox";
import "./Explore.css";
import ExploreItems from "./ExploreItems";

const Explore = () => {
    const [open, setOpen] = React.useState(true);
 
    return (
        <div
            style={{
                display: "flex",
                background: "linear-gradient(147deg, #923cb5 0%, #000000 74%)",
            }}
        >
            {open ? (
                <div className="explore-drawer-open explore___drawer___open">
                    <div onClick={() => setOpen(false)} className="explore-menu-item">
                        <ArrowBackIcon fontSize="large"  />
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                       
                       1. METACOPS NFT's
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                      
                        2. $MCOP Token
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                       
                       3. Staking NFT's
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                       
                        4. Breeding NFT's
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                        
                        5. P2E Game
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                       
                        6. DAO's
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                       
                        7. Contract Details
                    </div>
                    
                    
                </div>
            ) : (
                <div className="explore-drawer-close" onClick={() => setOpen(true)}>
                    <div className="explore-menu-item " style={{ height: "100%" }}>
                        <ArrowForwardIcon fontSize="large" />
                    </div>
                </div>
            )}
            <ExploreItems />
        </div>
    );
};

export default Explore;
