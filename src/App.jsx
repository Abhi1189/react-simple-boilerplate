import React, {Component} from 'react';
// import Message from './message.jsx';
import Navbar from './navbar.jsx';
import Chatbar from './chatbar.jsx';
import MessageList from './messageList.jsx';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: 'Bob'},
      
      messages: [
                  {
                    id:"101",
                    content: "hello",
                    username: "Bob"
                  },
                  { 
                    id: "102",
                    content:"Yello",
                    username: "Tina"
                  }
      ]
    }
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");

      // Add a new message to the list of messages in the data store
      const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
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
        <Chatbar currentUser={this.state.currentUser}/>
      </div>
    );
  }
}


export default App;

