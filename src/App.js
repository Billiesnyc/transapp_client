import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import API from './Components/API'
import LoginForm from './LogIn/LoginForm'
import SignupForm from './LogIn/SignupForm'
import New from './Components/New/New'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'


class App extends Component {

  state = {
    user: null,
    businesses: [],
    filteredBusinesses: []
  }

  login = (user) => {
    if (user.error) {
      alert(user.error)
      this.props.history.push('/login')
    } else {
      localStorage.setItem('token', user.token)
      this.setState({ user: user})
      this.props.history.push('/home')
      API.getBusinesses()
      .then(data => this.setState({ businesses: data })) 
    } 
  }

  signout = () => {
    localStorage.removeItem('token')
    this.setState({ user: null })
    this.props.history.push('/home')
  }

  filterBusinesses = (prop, filterName) => {
    if (filterName === 'category') {
    let filteredBusinesses = this.state.businesses.filter(business => business.category === prop)
    this.setState({ filteredBusinesses })}
    else if (filterName === 'city') {
      let filteredBusinesses = this.state.businesses.filter(business => business.city === prop)
    this.setState({ filteredBusinesses })}
    }
  
  clearFilters = () => {
    this.setState({ filteredBusinesses: this.state.businesses })
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
    
    const { handleSubmit, handleSignup, signout, filterBusinesses, clearFilters } = this
    const { user, businesses, filteredBusinesses } = this.state

    return (
      <div className="App container">
        <header>
        <Navbar handleSubmit={handleSubmit} 
            handleSignup={handleSignup} 
            signout={signout} 
            user={user} 
            filterBusinesses={filterBusinesses}
        />
        </header>
       
        <Route exact path='/login' render={props => <LoginForm {...props} handleSubmit={handleSubmit} />} />
        <Route exact path='/signup' render={props => <SignupForm {...props} handleSignup={handleSignup} />} />
        <Route exact path='/new' render={props => <New {...props} user={user} />} />
        
        <Route path='/home' 
          render={props => 
            <Home {...props} 
              handleSubmit={handleSubmit}
              filteredBusinesses={filteredBusinesses} 
              businesses={businesses}
              clearFilters={clearFilters}
              filterBusinesses={filterBusinesses}
            />} 
        />
      </div>
    );
  }
}

export default withRouter(App);
