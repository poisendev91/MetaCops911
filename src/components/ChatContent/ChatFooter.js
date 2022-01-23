import React from 'react'
import Button from '@mui/material/Button';
import './ChatFooter.css';

function ChatFooter() {
    return (
        <div className="chatFooter">
            <input 
                type="text" 
                placeholder="Message"
            />
            <Button variant="contained" style = {{width:"100px" , fontSize:"large", height: "50px"}}>Send</Button>
        </div>
    )
}

export default ChatFooter
