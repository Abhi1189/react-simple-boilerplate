import React, { Component } from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      content: ''
    }
  }
  render() {

    return (
      <footer className="chatbar">
      <input className="chatbar-username" placeholder="Your name(Optional)" defaultValue={this.props.currentUser.name} />
      <input className="chatbar-message" placeholder="Type and hit Enter!"/>
      </footer>
    );
  }
}

export default Chatbar;