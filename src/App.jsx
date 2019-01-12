import React, {Component} from 'react';
// import Message from './message.jsx';
import Navbar from './navbar.jsx';
import Chatbar from './chatbar.jsx';
import MessageList from './messageList.jsx';

const uuidv4 = require('uuid/v4');


class App extends Component {
  constructor(props) {
    super(props);

    this.socket = new WebSocket('ws://localhost:3001');

    this.state = {
      currentUser: {name: 'Bob'},
      
      messages: []
    }

    this.addMessage = this.addMessage.bind(this);
    this.getRandomId = this.getRandomId.bind(this);
    // this.socket.onmessage = this.socket.onmessage.bind(this);
  }

  getRandomId() {
    return Math.floor(Math.random() * Math.floor(100000000000000));
  }

  addMessage(contentPassedFromChatbar) {
    const newMessage = {
      id: uuidv4(),
      content: contentPassedFromChatbar,
      username: this.state.currentUser.name
    }

    this.socket.send(JSON.stringify(newMessage));
    const newMessages = this.state.messages.concat(newMessage);
    this.setState(
      {messages: newMessages}
    );
    
  }

  componentDidMount() {
    console.log("componentDidMount <App />");

    //Print connected to server when socket server starts
    this.socket.onopen = () => {
      console.log('Connected to Socket server');

      this.socket.onmessage = (event) => {
        console.log(event);
        const incomingMessage = JSON.parse(event.data);
        
        // console.log("BIG EVENT:  ", incomingMessage);
        // // code to handle incoming message

        const newMessages = this.state.messages.concat(incomingMessage);
        console.log(newMessages);
        this.setState(
          { messages: newMessages }
        );
      }

      // this.socket.send("""Hellooooooo1");


    }

    


    setTimeout(() => {
      console.log("Simulating incoming message");

      // Add a new message to the list of messages in the data store
      const newMessage = { id: uuidv4(), username: "Michelle", content: "Hello there!" };
      const messages = this.state.messages.concat(newMessage);
      
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages })
    }, 3000);
  }




  render() {

    // console.log(this.state.currentUser);
    
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages}/>
        <Chatbar currentUser={this.state.currentUser} addMessage={this.addMessage}/>
      </div>
    );
  }
}


export default App;

