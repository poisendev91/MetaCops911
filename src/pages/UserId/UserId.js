import React, { useState } from "react";
import dp from "../../assets/dp.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import SettingsIcon from "@mui/icons-material/Settings";

import "./UserId.css";
import UserSearchBar from "../../components/UserSearchBar/UserSearchBar";
import UserCard from "../../components/UserCard/UserCard";
import UserSettings from "../../components/UserSettings/UserSettings";

const styles = {
    textField: {
        fontSize: 50, //works
    },
};
const UserId = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(value);
    return (
        <div className="userid">
            <div className="wrapped__userid">
                <div className="top__header">
                    <div className="top__header__content">
                        <div className="user__profile">
                            <div className="user__img">
                                <img src={dp} alt="" />
                            </div>
                            <h2>
                                <b>Stirdu</b>
                            </h2>
                            <p>0x1914...3b59</p>
                            <p>Joined September 2021</p>
                        </div>
                    </div>
                </div>

                <div className="profile__tab">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="icon label tabs example"
                    >
                        <Tab
                            icon={<PhoneIcon style={{ fontSize: "25px" }} />}
                            label="RECENTS"
                            style={{ fontSize: "20px" }}
                        />

                        <Tab
                            style={{ fontSize: "20px" }}
                            icon={<FavoriteIcon style={{ fontSize: "25px" }} />}
                            label="FAVORITES"
                        />

                        <Tab
                            style={{ fontSize: "20px" }}
                            icon={<PersonPinIcon style={{ fontSize: "25px" }} />}
                            label="NEARBY"
                        />
                        <Tab
                            style={{ fontSize: "20px" }}
                            icon={<SettingsIcon style={{ fontSize: "25px" }} />}
                            label="Settings"
                        />
                    </Tabs>
                    <div className="user__items">
                        <div className="user__seracrbar">
                            {(value === 0 || value === 1 || value === 2) && <UserSearchBar />}
                        </div>
                    </div>
                    <div className="user__item__list">
                        {value === 0 && <UserCard />}:
                        {value === 1 && (
                            <h3 style={{ textAlign: "center" }}>No content Upload yet</h3>
                        )}
                        :
                        {value === 2 && (
                            <h3 style={{ textAlign: "center" }}>No content Upload yet</h3>
                        )}
                        {value === 3 && <UserSettings />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserId;
