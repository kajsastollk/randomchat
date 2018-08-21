import React, { Component } from 'react';
import '../style/App.css';

class App extends Component {
  state = {
    user: ''
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AcademyChat</h1>
        </header>
        <p className="App-intro">
          blablabla
        </p>
        <div className="login">
          <label htmlFor="loginBtn">Login with your Google Account</label>
          <button type="submit" name="loginBtn">Login</button>
        </div>
        <div className="chat">

        </div>
      </div>
    );
  }
}

export default App;
