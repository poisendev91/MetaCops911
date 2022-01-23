import React, { Component } from "react";
import Avatar from "./Avatar";

export default class ChatListItems extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
        <div className="items">
            <Avatar
                image = {this.props.image ? this.props.image : "http://placehold.it/80x80"}
                isOnline ={this.props.isOnline}
            />
            
            <div className="items__meta">
                <p className="name">{this.props.name}</p>
                <span className="activeTime">32 mins ago</span>
            </div>

        </div>
    );
  }
}
