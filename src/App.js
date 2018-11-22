import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import API from './Components/API'
import LoginButtons from './LogIn/LogInButtons'
import Home from './Components/Home'

class App extends Component {

  state = {
    user: null,
    businesses: []
  }

  login = (user) => {
    if (user.error) {
      alert(user.error)
      this.props.history.push('/login')
    } else {
      localStorage.setItem('token', user.token)
      this.setState({ user: user})
      this.props.history.push('/home')
    } 
  }

  signout = () => {
    localStorage.removeItem('token')
    this.setState({ user: null })
    this.props.history.push('/home')
  }

  componentDidMount() {
    if (localStorage.getItem('token')) { 
    API.validate()
      .then(user => this.login(user))
      .then(this.props.history.push('/home'))
      .catch(error => {
        this.props.history.push('/home')
      })
     API.getBusinesses()
      .then(data => this.setState({ businesses: data })) 
    } 
  }

  handleSubmit = (email, password) => {
    API.login(email, password)
      .then(this.login)
      .catch(err => console.log(err))
  }

  handleSignup = (email, password, city, gender) => {
    API.signup(email, password, city, gender)
      .then(this.login)
      .catch(err => console.log(err))
  }

  render() {
    
    const { handleSubmit, handleSignup, signout } = this
    const { user, businesses } = this.state

    return (
      <div className="App container">
        <header>
          <div className="row">
            <div className="col-6">
            </div>
            <div className="col-6 text-right">
              <LoginButtons 
                handleSubmit={handleSubmit} 
                handleSignup={handleSignup} 
                signout={signout} 
                user={user}
               />
            </div>
          </div>
        </header>
        <Route path='/home' 
          render={props => 
            <Home {...props} 
              handleSubmit={handleSubmit}
              businesses={businesses} 
            />} 
        />
      </div>
    );
  }
}

export default withRouter(App);
