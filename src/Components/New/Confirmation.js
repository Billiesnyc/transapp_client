import React from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class Confirmation extends React.Component {

  
  render () {

    const { name, addReview, cancelReview } = this.props
    return (
       <div>
        <h3>Add a review for {name}?</h3>
        <Button color="primary" className="btn login-button mr-2" onClick={addReview}>Yes</Button> 
        <Link to="/home">
          <Button color="light" className="btn btn-outline-secondary" onClick={cancelReview}>No</Button> 
        </Link>
       </div>
    )
  }
}

export default Confirmation
