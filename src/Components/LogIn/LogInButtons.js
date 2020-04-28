import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

class LoginButtons extends React.Component {
 

  render () {
    const { signout, user } = this.props
    return(
        <div>
          {!user ? 
           
          <div>
           
            <Link to="/login">
              <Button color="primary" className="login-button">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button color="primary" className="login-button">Sign up</Button>
            </Link>
           
          </div>
          :
          <div>
            <span className="pr-3 black-link">Welcome, <Link to="/account">{user.username}</Link> </span>
            <Button color="primary" className="btn login-button" onClick={signout} >Log Out </Button>
          </div>
          }
   
    </div>
    )
  }

} 

export default LoginButtons