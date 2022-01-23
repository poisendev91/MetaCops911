import React from 'react'
import Button from '@mui/material/Button';
import './MessageUi.css'
import {Link} from 'react-router-dom'

const Message = () => {
    return (
        <div className="message_outer_container">
            Click to go to message route
            <Link to="/chatroom">
                <Button variant="contained" style = {{width:"200px" , fontSize:"large"}}>Message</Button>
            </Link>
        </div>
    )
}

export default Message;
