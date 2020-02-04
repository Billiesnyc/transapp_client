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
              <Button color="primary" className="blue-button">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button color="primary" className="blue-button">Sign up</Button>
            </Link>
           
          </div>
          :
          <div>
            <span className="pr-3 black-link">Welcome, <Link to="/account">{user.username}</Link> </span>
            <input type="button" className="btn blue-button" value="Log Out" onClick={signout}/>
          </div>
          }
   
    </div>
    )
  }

} 

export default LoginButtons