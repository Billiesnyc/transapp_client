import React from 'react'
import { Route, Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


class LoginButtons extends React.Component {
 

  render () {
    const { handleSubmit, handleSignup, signout, user } = this.props
    return(
        <div>
          {!user ?  
          <div>
           
            <Link to="/login">
              <button className="btn btn-info">Log in</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-info">Sign up</button>
            </Link>
            <Route exact path='/login' render={props => <LoginForm {...props} handleSubmit={handleSubmit} />} />
            <Route exact path='/signup' render={props => <SignupForm {...props} handleSignup={handleSignup} />} />
            
          </div>
          :
          <div>
            <span className="pr-3">Welcome, {user.email} </span>
            <input type="button" className="btn btn-info" value="Log Out" onClick={signout}/>
          </div>
          }
   
    </div>
    )
  }

} 

export default LoginButtons