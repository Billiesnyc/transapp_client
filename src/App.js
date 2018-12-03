import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import API from './Components/API'
import LoginForm from './Components/LogIn/LoginForm'
import SignupForm from './Components/LogIn/SignupForm'
import New from './Components/New/New'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import Account from './Components/Account'

require('dotenv').config()

class App extends Component {

  state = {
    user: null,
    businesses: [],
    selectedBusiness: null,
    filteredBusinesses: [],
    filterProps: []
  }

  login = (user) => {
    if (user.error) {
      alert(user.error)
      this.props.history.push('/login')
    } else {
      localStorage.setItem('token', user.token)
      this.setState({ user: user })
      this.props.history.push('/home')
      API.getBusinesses()
      .then(data => this.setState({ businesses: data }))
      .then(this.filterBusinesses(this.state.user.city, 'city'))
      
    } 
  }

  signout = () => {
    localStorage.removeItem('token')
    this.setState({ user: null })
    this.props.history.push('/home')
  }

  filterBusinesses = (filterProps, filterName) => {
    let filteredBusinesses = this.state.businesses
    if (filterName === 'category') {
        filteredBusinesses = this.state.filteredBusinesses.filter(business => business.category.includes(filterProps))
    this.setState({ filteredBusinesses })}
     if (filterName === 'city') {
      filteredBusinesses = this.state.filteredBusinesses.filter(business => business.city.includes(filterProps))
      this.setState({ filteredBusinesses })}
    this.setState({ filterProps: [...this.state.filterProps, filterProps] })
    }
  
  clearFilters = () => {
    this.setState({ filteredBusinesses: this.state.businesses, filterProps: [] })
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
      .then(data => this.setState({ businesses: data, filteredBusinesses: data })) 
    } 
  }

  updateUser = (user) => {
    this.setState({ user, filterProps: [user.city] })
  }

  selectBusiness = (selectedBusiness) => {
    this.setState({ selectedBusiness })
  }

  deselectBusiness = () => {
    this.setState({ selectedBusiness: null })
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
    
    const { handleSubmit, handleSignup, signout, filterBusinesses, clearFilters, selectBusiness, deselectBusiness, updateUser } = this
    const { user, businesses, selectedBusiness, filterProps, filteredBusinesses } = this.state

    return (
      <div className="App container">
        <header>
        <Navbar handleSubmit={handleSubmit} 
            handleSignup={handleSignup} 
            signout={signout} 
            user={user} 
            filterBusinesses={filterBusinesses}
            deselectBusiness={deselectBusiness}
           
        />
        </header>
       
        <Route exact path='/login' render={props => <LoginForm {...props} handleSubmit={handleSubmit} />} />
        <Route exact path='/signup' render={props => <SignupForm {...props} handleSignup={handleSignup} />} />
        <Route exact path='/new' render={props => <New {...props} user={user} />} />
        <Route exact path='/account' render={props => <Account {...props} user={user} updateUser={updateUser}/>} />

        <Route path='/home' 
          render={props => 
            <Home {...props} 
              handleSubmit={handleSubmit}
              filteredBusinesses={filteredBusinesses} 
              businesses={businesses}
              clearFilters={clearFilters}
              filterBusinesses={filterBusinesses}
              user={user}
              selectedBusiness={selectedBusiness}
              deselectBusiness={deselectBusiness}
              selectBusiness={selectBusiness}
              filterProps={filterProps}
    
            />} 
        />
      </div>
    );
  }
}

export default withRouter(App);
