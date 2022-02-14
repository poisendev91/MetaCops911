import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Web from "./Web/Web";


const Header = () => {
    const [expanded, setExpanded] = useState(false);
    return (
            <div className="header-class">
                <header className={expanded ? "header header-opened" : "header"}>
                    <div>
                        <Link to="/" className="logo">
                            METACOPS911
                        </Link>
                        <input
                            className="menu-btn"
                            type="checkbox"
                            onChange={() => setExpanded(!expanded)}
                            id="menu-btn"
                            checked={expanded ? true : false}
                        />
                        <label className="menu-icon" htmlFor="menu-btn">
                            <span className="navicon" />
                        </label>
                       
                    </div>
                    <Web expanded={expanded} />
                </header>
            </div>
    ) ;
};
export default Header;
