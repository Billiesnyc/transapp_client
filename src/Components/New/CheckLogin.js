  import React from 'react'
  import NewReview from './NewReview'
  import { Link } from 'react-router-dom'

  class CheckLogin extends React.Component {
    
    render () {
      const { user, createNewBusiness } = this.props
      return (
        <div className="list-group">
            { user ? <NewReview user={user} createNewBusiness={createNewBusiness}/> : <Link to="/login"> Sorry, you have to be logged in to add a recommendation. </Link>}  
          </div>
      )
    }
  }

  export default CheckLogin
