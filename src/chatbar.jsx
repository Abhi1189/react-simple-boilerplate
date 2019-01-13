import React, { Component } from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);

    //keep the state in case of mods
    // this.state = {
    //   username: "",
    //   content: ''
    // }

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleContentSubmission = this.handleContentSubmission.bind(this);

  }

  handleChangeUsername(event) {
    if(event.key === 'Enter') {

      let username = event.target.value;

      // console.log('newUsername: ', username);
      
      this.props.changeUser(event.target.value);
    
    }
    
  }


  handleContentSubmission(event) {
    if (event.key === 'Enter') {
      
      // console.log(':Chatbar: event target:', event.target.value)
      
      this.props.addMessage(event.target.value);
      event.target.value = '';
    }
  }
  render() {

    return (
      <footer className="chatbar">
      <input className="chatbar-username" onKeyUp={this.handleChangeUsername} placeholder="Your name(Optional)" defaultValue={this.props.currentUser.name} />
      <input className="chatbar-message" onKeyUp={this.handleContentSubmission} placeholder="Type and hit Enter!" />
      </footer>
    );
  }
}

export default Chatbar;