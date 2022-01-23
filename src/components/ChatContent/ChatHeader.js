import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material';
import './ChatHeader.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__profile">
                <div className="profile__avatar">
                    <AccountCircleIcon />
                </div>
                <div className="details username">
                    <Typography
                        variant="h4"
                        
                    >
                        Altdeck
                    </Typography>
                    <p className="chatHeader__p">Online</p>
                </div>
            </div>
            <div className="chatHeader__details">
                <MoreVertIcon />
            </div>
        </div>
    )
}

export default ChatHeader
