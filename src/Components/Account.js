import React from 'react'
import EditAccount from './EditAccount'

class Account extends React.Component {

    state={
        edit: false
    }

    showEdit = () => {
        this.setState({ edit: !this.state.edit })
    }

  render () {
    
    const { user, updateUser } = this.props
    const { showEdit } = this
    const { edit } = this.state
    return (
        <div className="container pt-3">
            <h2>Account page for {user.email}</h2>
            {edit ? 
            <EditAccount user={user} showEdit={showEdit} updateUser={updateUser}/>
            : 
            < >
            <p><b>Email:</b> {user.email}</p>
            <p><b>Default City:</b> {user.city}</p>
            <p><b>Gender Identity:</b> {user.gender}</p>

        <button className="btn blue-button" onClick={showEdit}>Edit Account</button>
         < />}
      </div>
    )
  }
}

export default Account
