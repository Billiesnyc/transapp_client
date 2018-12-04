import React from 'react'


class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event =>
  this.setState({ [event.target.name]: event.target.value })

  render () {
    const { email, password } = this.state
    const { handleChange } = this
    const { handleSubmit } = this.props
    return(
      <form>
          <label className="grey-text" margin='normal'> Email</label>
          <input id='emailInput' value={email} name='email' className="form-control" 
            onChange={handleChange} />  
   
          <label className="grey-text" margin='normal'> Password</label>
          <input id='passwordInput' value={password} type='password' name='password' className="form-control"  
            onChange={handleChange} />
  
        <button variant='contained' type='submit' className="btn blue-button" onClick={e => {
          e.preventDefault()
          handleSubmit(email, password)
          }} >
          Submit
        </button>
      </form>
    )
  }

} 

export default LoginForm