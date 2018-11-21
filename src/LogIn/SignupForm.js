import React from 'react'


class SignupForm extends React.Component {
  state = {
    email: '',
    password: '',
    city: '',
    gender: ''
  }

  handleChange = event =>
  this.setState({ [event.target.name]: event.target.value })

  render () {
    const { email, password, city, gender } = this.state
    const { handleChange } = this
    const { handleSignup } = this.props
    return(
      <form>
          <label className="grey-text" margin='normal'>Email</label>
          <input id='emailInput' value={email} name='email' className="form-control"
            onChange={handleChange} />  
        <br/>
          <label className="grey-text" margin='normal'>Password</label>
          <input id='passwordInput' value={password} type='password' name='password' className="form-control"
            onChange={handleChange} />
        <br/>
        <label className="grey-text" margin='normal'>Default City</label>
          <input id='cityInput' value={city} type='city' name='city' className="form-control"
            onChange={handleChange} />
        <br/>
        <label className="grey-text" margin='normal'>Gender</label>
          <input id='genderInput' value={gender} type='gender' name='gender' className="form-control"
            onChange={handleChange} />
        <br/>
        <button variant='contained' type='submit' className="btn btn-info" onClick={e => {
          e.preventDefault()
          handleSignup(email, password, city, gender)
          }} > 
          Submit
        </button>
      </form>


    )
  }

} 

export default SignupForm