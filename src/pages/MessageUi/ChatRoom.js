import React from 'react'
import Button from '@mui/material/Button';
import './MessageUi.css'
import './ChatRoom.css'
import { makeStyles } from '@mui/styles';
import ChatContent from '../../components/ChatContent/ChatContent';
import ChatList from '../../components/List/ChatList';

const ChatRoom = () => {
    return (
        <div className="chatroom ">
            <ChatList />
            <ChatContent />
        </div>
    );
};

export default ChatRoom;
