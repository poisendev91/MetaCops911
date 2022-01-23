import React from "react";
import Items from "../../assets/item.gif";
import Etherem from "../../assets/etherem.svg";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./UserCard.css";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
}));
const UserCard = () => {
    const [value, setValue] = React.useState(0);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className="card__items">
                <Grid item xs={12} sm={6} md={4} xl={3}>
                    <Item>
                        <div className="item__card">
                            <img className="card__img" src={Items} alt="" />

                            <div className="card__content">
                                <div className="cart__title">
                                    <h6>Lucky Sloths NFT</h6>
                                    <small>
                                        <b>Lucky Sloth #2316</b>
                                    </small>
                                </div>
                                <div className="card__price">
                                    <small style={{ marginLeft: "20px" }}>Price</small>
                                    <div className="price">
                                        <img src={Etherem} alt="" />
                                        <h6>
                                            <b>0.15</b>
                                        </h6>
                                    </div>
                                    <div className="price">
                                        <small>Last&#160;</small>
                                        <img src={Etherem} alt="" />
                                        <h6>
                                            <b>0.15</b>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="react">
                                <Box>
                                    <BottomNavigation
                                        showLabels
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    >
                                        <BottomNavigationAction
                                            icon={
                                                <FavoriteIcon
                                                    style={{
                                                        fontSize: "25px",
                                                        backgroundColor: "transparent",
                                                    }}
                                                />
                                            }
                                        />
                                    </BottomNavigation>
                                </Box>
                                <h5 style={{ marginLeft: "-20px" }}>3</h5>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                    <Item>
                        <div className="item__card">
                            <img className="card__img" src={Items} alt="" />

                            <div className="card__content">
                                <div className="cart__title">
                                    <h6>Lucky Sloths NFT</h6>
                                    <small>
                                        <b>Lucky Sloth #2316</b>
                                    </small>
                                </div>
                                <div className="card__price">
                                    <small style={{ marginLeft: "20px" }}>Price</small>
                                    <div className="price">
                                        <img src={Etherem} alt="" />
                                        <h6>
                                            <b>0.15</b>
                                        </h6>
                                    </div>
                                    <div className="price">
                                        <small>Last&#160;</small>
                                        <img src={Etherem} alt="" />
                                        <h6>
                                            <b>0.15</b>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="react">
                                <Box>
                                    <BottomNavigation
                                        showLabels
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    >
                                        <BottomNavigationAction
                                            icon={
                                                <FavoriteIcon
                                                    style={{
                                                        fontSize: "25px",
                                                        backgroundColor: "transparent",
                                                    }}
                                                />
                                            }
                                        />
                                    </BottomNavigation>
                                </Box>
                                <h5 style={{ marginLeft: "-20px" }}>3</h5>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                    <Item>
                        <div className="item__card">
                            <img className="card__img" src={Items} alt="" />

                            <div className="card__content">
                                <div className="cart__title">
                                    <h6>Lucky Sloths NFT</h6>
                                    <small>
                                        <b>Lucky Sloth #2316</b>
                                    </small>
                                </div>
                                <div className="card__price">
                                    <small style={{ marginLeft: "20px" }}>Price</small>
                                    <div className="price">
                                        <img src={Etherem} alt="" />
                                        <h6>
                                            <b>0.15</b>
                                        </h6>
                                    </div>
                                    <div className="price">
                                        <small>Last&#160;</small>
                                        <img src={Etherem} alt="" />
                                        <h6>
                                            <b>0.15</b>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="react">
                                <Box>
                                    <BottomNavigation
                                        showLabels
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    >
                                        <BottomNavigationAction
                                            icon={
                                                <FavoriteIcon
                                                    style={{
                                                        fontSize: "25px",
                                                        backgroundColor: "transparent",
                                                    }}
                                                />
                                            }
                                        />
                                    </BottomNavigation>
                                </Box>
                                <h5 style={{ marginLeft: "-20px" }}>3</h5>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                    <Item>
                        <div className="item__card">
                            <img className="card__img" src={Items} alt="" />

                            <div className="card__content">
                                <div className="cart__title">
                                    <h6>Lucky Sloths NFT</h6>
                                    <small>
                                        <b>Lucky Sloth #2316</b>
                                    </small>
                                </div>
                                <div className="card__price">
                                    <small style={{ marginLeft: "20px" }}>Price</small>
                                    <div className="price">
                                        <img src={Etherem} alt="" />
                                        <h6>
                                            <b>0.15</b>
                                        </h6>
                                    </div>
                                    <div className="price">
                                        <small>Last&#160;</small>
                                        <img src={Etherem} alt="" />
                                        <h6>
                                            <b>0.15</b>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="react">
                                <Box>
                                    <BottomNavigation
                                        showLabels
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    >
                                        <BottomNavigationAction
                                            icon={
                                                <FavoriteIcon
                                                    style={{
                                                        fontSize: "25px",
                                                        backgroundColor: "transparent",
                                                    }}
                                                />
                                            }
                                        />
                                    </BottomNavigation>
                                </Box>
                                <h5 style={{ marginLeft: "-20px" }}>3</h5>
                            </div>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UserCard;
