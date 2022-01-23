import React from "react";
import Notifications from "react-notifications-menu";
import "./Notification.css";
import Bell from "../../assets/bell.svg";

const Notification = () => {
    const data = [
        {
            image: "https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b9.png",
            message: "Lorem ipsum dolor sit amet.",
            detailPage: "/events",
            receivedTime: "12h ago",
        },
    ];
    return (
        <div
            style={{
                height: "100vh",
                padding: "1.5rem",
            }}
        >
            <Notifications
                data={data}
                header={{
                    title: "Notifications",
                    option: { onClick: () => console.log("Clicked") },
                }}
                style={{ backgroundColor: "#09080d" }}
                color="red"
                icon={Bell}
            />
        </div>
    );
};

export default Notification;
