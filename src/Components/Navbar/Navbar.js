import React from 'react'
import { Link } from 'react-router-dom'

import LoginButtons from '../LogIn/LogInButtons';


class Navbar extends React.Component {

  
  render () {

    const { signout, user, handleSubmit, handleSignup } = this.props

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light main-nav-pink">
        <Link to="/home" className="navbar-brand">
        Affirm</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        
          <li className="nav-item active">
          <Link to="/home" className="nav-link">Home</Link>
          </li>
          
          
          <li className="nav-item active"><Link to="/new" className="nav-link">Add Recommendation </Link></li>
         
          </ul>
          <LoginButtons handleSubmit={handleSubmit} 
            handleSignup={handleSignup} 
            signout={signout} 
            user={user} 
            />   
        </div>
        </nav>
        </div>
    )
  }
}

export default Navbar
