import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: {
      firstName: 'Sam',
      lastName: 'Smith',
      profileImageURL: 'https://randomuser.me/api/portraits/lego/3.jpg'
    }
  }

  render() {
    const user = this.state.user

    return (
      <div className="App">
        <h1>LinkedIn Profile Editor</h1>
        <img src={user.profileImageURL}/>
        <p>Name: {user.firstName} {user.lastName}</p>
      </div>
    );
  }
}

export default App;
