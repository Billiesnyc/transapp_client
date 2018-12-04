import React from 'react'
import { Link } from 'react-router-dom'


class LoginButtons extends React.Component {
 

  render () {
    const { signout, user } = this.props
    return(
        <div>
          {!user ? 
           
          <div>
           
            <Link to="/login">
              <button className="btn blue-button">Log in</button>
            </Link>
            <Link to="/signup">
              <button className="btn blue-button">Sign up</button>
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