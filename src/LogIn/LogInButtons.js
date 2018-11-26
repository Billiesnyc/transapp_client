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
              <button className="btn btn-info">Log in</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-info">Sign up</button>
            </Link>
           
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