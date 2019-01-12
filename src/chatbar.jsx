import React, { Component } from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      content: ''
    }

    this.handleContentSubmission = this.handleContentSubmission.bind(this);

  }

  handleContentSubmission(event) {
    if (event.key === 'Enter') {
      console.log(':Chatbar: event target:', event.target.value)
      this.props.addMessage(event.target.value);

    }
  }
  render() {

    return (
      <footer className="chatbar">
      <input className="chatbar-username" placeholder="Your name(Optional)" defaultValue={this.props.currentUser.name} />
      <input className="chatbar-message" onKeyUp={this.handleContentSubmission} placeholder="Type and hit Enter!" />
      </footer>
    );
  }
}

export default Chatbar;