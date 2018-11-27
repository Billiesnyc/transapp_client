  import React from 'react'
  import NewForm from './NewForm'
  import { Link } from 'react-router-dom'

  class New extends React.Component {

    state = {
      
    }
    
    render () {
      const { user } = this.props
      return (
        <div className="list-group">
            { user ? <NewForm user={user} /> : <Link to="/login"> Sorry, you have to be logged in to add a recommendation. </Link>}  
          </div>
      )
    }
  }

  export default New
