import React, {createRef} from 'react';
import ChatItem from './ChatItem';

class ChatBody extends React.Component {
    
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
      "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
      "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
      "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }
    render() { 
        return (
        <div>
            <div className="content__body">
            <div className="chat__items">
                {this.state.chat.map((itm, index) => {
                return (
                    <ChatItem
                    animationDelay={index + 2}
                    key={itm.key}
                    user={itm.type ? itm.type : "me"}
                    msg={itm.msg}
                    image={itm.image}
                    />
                );
                })}
                <div ref={this.messagesEndRef} />
            </div>
            </div>
        </div>
        );
    }
}
 
export default ChatBody;