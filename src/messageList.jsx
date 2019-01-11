import React, { Component } from 'react';
import { Message } from './message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);


  }
  render() {
    const singleMsg = this.props.messages.map((message) => {
      
      //WHY DID IT NOT WORK WITHOUT THE return...? 
      return (<Message key={message.id} msg={message.content} user={message.username} />);
    });
    return (
      <main className="messages">
        { singleMsg }
      </main>
    );
  }
}

export default MessageList;