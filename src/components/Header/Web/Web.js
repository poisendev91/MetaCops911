import React, { useState, useEffect } from "react";

import Button from "../../Button/Button";

import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { NavDropdown } from "react-bootstrap";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Web = ({ expanded }) => {
    const [theme, setTheme] = useState("light.css");

    useEffect(() => {
        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = theme;

        head.appendChild(link);

        return () => {
            head.removeChild(link);
        };
    }, [theme]);

    const handleChange = (e) => {
        if (e.target.checked) setTheme("dark.css");
        else setTheme("light.css");
    };
    return (
        <ul
            className={expanded ? "menu" : "menu menu-not-opened"}
            style={{ display: "flex", alignItems: "center" }}
        >
           

            <li>
                <Link className="navbar__link" to="/mint" activeStyle={{ fontWeight: "bold" }}>
                  Mint
                </Link>
            </li>
            <li>
                <Link className="navbar__link" to="/roadmap" activeStyle={{ fontWeight: "bold" }}>
                  Roadmap
                </Link>
            </li>
            <li>
                <Link className="navbar__link" to="/contact" activeStyle={{ fontWeight: "bold" }}>
                  Socials
                </Link>
            </li>
            {/* <li>
                <Link className="navbar__link" to="/profile" activeStyle={{ fontWeight: "bold" }}>
                 
                </Link>
            </li> */}
            <li>
                <Link className="navbar__link" to="/whitepaper" activeStyle={{ fontWeight: "bold" }}>
                 Whitepaper
                </Link>
            </li>
            <li>
                <Button />
            </li>
           
        </ul>
    );
};

export default Web;
