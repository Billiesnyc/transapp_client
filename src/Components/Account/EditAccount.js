import React from 'react'
import API from '../API'
class EditAccount extends React.Component {

    state = {
        email: '',
        username: '',
        password: '',
        city: '',
        gender: '',
        showErrors: false
      }
    
      handleChange = event =>
      this.setState({ [event.target.name]: event.target.value })

      handleSubmit = () => {
        if (this.state.password) {
            API.updateAccount(
                this.state.email, 
                this.state.username,
                this.state.password, 
                this.state.city, 
                this.state.gender)
            .then(user => this.props.updateUser(user))
            .then(() => this.props.showEdit())
         }
        else {
            this.setState({ showErrors: true })
        }}

      componentDidMount(){
          this.setState({ email: this.props.user.email, username: this.props.user.username, password:  this.props.user.password, city: this.props.user.city, gender: this.props.user.gender })
      }
  
      render () {
    
    const { handleChange, handleSubmit } = this
    const { email, username, password, city, gender, showErrors } = this.state
    return (
        < >
            {showErrors ? <div className="alert alert-danger">You must input your password to update your account</div> : null}
            <form>
                <label className="grey-text" margin='normal'>Email</label>
            <input id='emailInput' value={email} name='email' className="form-control"
                onChange={handleChange} />  
            <br/>
            <label className="grey-text" margin='normal'>Username</label>
            <input id='usernameInput' value={username} name='username' className="form-control"
            onChange={handleChange} />  
            <br/>
            <label className="grey-text" margin='normal'>Password (required to update)</label>
            <input id='passwordInput' type='password' name='password' className="form-control"
                onChange={handleChange} />
            <br/>
            <label className="grey-text" margin='normal'>Default City</label>
            <input id='cityInput' value={city} type='city' name='city' className="form-control"
                onChange={handleChange} />
            <br/>
            <label className="grey-text" margin='normal'>Gender Identity</label>
            <input id='genderInput' value={gender} type='gender' name='gender' className="form-control"
                onChange={handleChange} />
            <br/>
            <button variant='contained' type='submit' className="btn blue-button" onClick={e => {
            e.preventDefault()
            handleSubmit(email, username,password, city, gender)
            }} > 
            Submit
            </button>
            </form>
               
        </>
    )
  }
}

export default EditAccount
