import React, { useState } from "react";
import "./Navbar.css";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Web from "./Web/Web";


const Header = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Fade top duration={1000} distance="20px">
            <div className="header-class">
                <header className={expanded ? "header header-opened" : "header"}>
                    <div>
                        <Link to="/" exact className="logo">
                            METACOPS
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
                        <div class="search">
                            <button type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                            <input
                                type="text"
                                class="searchTerm"
                                id="input_text"
                                placeholder="Search..."
                            />
                        </div>
                    </div>
                    <Web expanded={expanded} />
                </header>
            </div>
        </Fade>
    ) ;
};
export default Header;
