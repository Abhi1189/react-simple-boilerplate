import React, { Component } from 'react';

export class Message extends Component {
  
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="message" key={this.props.id}>
        <span className="message-username">{this.props.user}</span>
        <span className="message-content">{this.props.msg}</span>
      </div>
      
    );
  }
}

export class Notification extends Component {
  render() {
    return (
      <div className="message system">Anonymous1 changed their name to nomnom</div>
    );


  }
}
