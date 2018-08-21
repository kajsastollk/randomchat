import React, { Component } from 'react';
import '../style/App.css';

import firebase, { googleProvider } from '../firebase.js';

class App extends Component {
  state = {
    messages: [],
    user: ''
  }

  componentDidMount() {
    this.auth();
    this.pushChatMsg();
  }

  //auth with Gmail account
  auth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user });
      } else {
        this.setState({ user: '' });
      }
    })
  }

  //login
  login = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
  }

  //logout
  logout = () => {
    firebase.auth().logout();
  }

  //send message to messages in db
  pushChatMsg = (chatMsg) => {
    firebase.database()
      .ref('/messages')
      //working! right syntax. not yet working with this.state.user.email
      .set({
        chat1: {
          chatMsg: "chattingchattting",
          createdBy: "person2",
        },
        chat2: {
          chatMsg: "blablabla",
          createdBy: "person1",
        },
        chat3: {
          chatMsg: "hejhej",
          createdBy: "person2",
        }
      });
    //.set({ ...chatMsg, createdBy: this.state.user.email });
  }


  render() {
    console.log(this.state.user);
    const { messages } = this.state;

    const chatConversation = messages.map(chatMsg => (
      <div className="chatConversation">
        {chatMsg}
      </div>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AcademyChat</h1>
        </header>
        <p className="App-intro">
          blablabla
        </p>
        <div className="login">
          <button onClick={this.login} type="submit" name="loginBtn">Google Login</button>
        </div>
        {this.state.user && this.state.user.email}
        {chatConversation}
      </div >
      /**
       * <div className="chat">
              <form>
                <label htmlFor="inputMsg">Start chatting now!</label>
                <br />
                <input type="text" name="inputMsg" className="inputBox" />
                <button type="submit">Send</button>
              </form>
              <div className="prevMsg">
                <p>Hej</p>
              </div>
            </div>
       * */

    );
  }
}

export default App;
