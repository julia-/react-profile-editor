import React, { Component } from 'react';
import './App.css';
import { Name, ProfileImage } from './components/ShowProfile'
import InputText from './components/EditProfile'

class App extends Component {
  state = {
    user: {
      firstName: 'Jason',
      lastName: 'Mantzoukas',
      profileImageURL: 'http://media.hollywood.com/images/650x1000/7577546.jpg'
    }
  }

  onChangeFirstName = (event) =>{
    // Get the <input> (and HTMLInputElement)
    const input = event.target
    // Get the current inputted text from the field
    const newFirstName = input.value
    this.setState((prevState) => {
      // Make changes to the state
      const user = prevState.user
      user.firstName = newFirstName
      return {
        // this.state.user will be updated
        user: user
      }
    })
  }

  onChangeLastName = (event) => {
    const input = event.target
    const newLastName = input.value
    this.setState((prevState) => {
      const user = prevState.user
      user.lastName = newLastName
      return {
        user: user
      }
    })
  }

  onChangeProfileImage = (event) => {
    const input = event.target
    const newProfileImageURL = input.value
    this.setState((prevState) => {
      const user = prevState.user
      user.profileImageURL = newProfileImageURL
      return {
        user: user
      }
    })
  }

  render() {
    const user = this.state.user

    return (
      <div className='App'>
        <h1>LinkedIn Profile Editor</h1>
        <ProfileImage imageURL={user.profileImageURL}/>
        <Name>Name: {user.firstName} {user.lastName}</Name>
        <div className='edit-profile'>
          <div className='form-group'>
            <label>
              First name:
              {' '}
              <InputText
                inputValue={ user.firstName }
                eventListener={
                  // When user types in text field
                  // This funtion is called
                  // The event provides information about what happened
                  this.onChangeFirstName
                  }
              />
            </label>
          </div>
          <div className='form-group'>
            <label>
              Last name:
              {' '}
              <InputText
                inputValue={ user.lastName }
                eventListener={
                  this.onChangeLastName
                }
              />
            </label>
          </div>
          <div className='form-group'>
            <label>
              Profile image:
              {' '}
              <InputText
                inputValue={ user.profileImageURL }
                eventListener={
                  this.onChangeProfileImage
                }
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
