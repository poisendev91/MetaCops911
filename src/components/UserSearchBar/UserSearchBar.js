import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./UserSearchBar.css";

const Item = styled(Paper)(({ theme }) => ({
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    boxShadow: "none",
}));
const UserSearchBar = () => {
    return (
        <Grid container spacing={2} className="search__items">
            <Grid item xs={12} sm={12} md={6} className="search">
                <Item>
                    <input
                        className="search__input"
                        type="text"
                        name="search"
                        placeholder="Search"
                    />
                </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={4} className="selected__items">
                <Item>
                    <select className="select__field" name="select" id="select">
                        <option value="New">New</option>
                        <option value="New">New</option>
                        <option value="New">New</option>
                    </select>
                </Item>
            </Grid>
            <Grid item xs={12} sm={8} md={2} className="selected__items ">
                <Item>
                    <select className="select__field" name="select" id="select">
                        <option value="New">New</option>
                        <option value="New">New</option>
                        <option value="New">New</option>
                    </select>
                </Item>
            </Grid>
        </Grid>
    );
};

export default UserSearchBar;
