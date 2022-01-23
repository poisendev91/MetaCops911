import React from 'react';
import './ChatContent.css';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatBody from './ChatBody';

class ChatContent extends React.Component {
    render() { 
        return (
            <div className="chatContent">
                <ChatHeader/>
                <ChatBody/>
                <ChatFooter/>
            </div>
        )
    }
}

export default ChatContent;