import React, { Component } from 'react';
import { Message } from './message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);


  }
  render() {
    const singleMsg = this.props.messages.map((message, index) => {
      
      // console.log('this.props - message', message)
      
      //WHY DID IT NOT WORK WITHOUT THE return...? 
      return (<Message key={index} msg={message.content} user={message.username} />);
    });
    
    return (
      <main className="messages">
        { singleMsg }
      </main>
    );
  }
}

export default MessageList;