import React from 'react'



class Confirmation extends React.Component {

  
  render () {

    const { name, addReview, cancelReview } = this.props
    return (
       <div>
        <h3>Add a review for {name}?</h3>
        <button className="btn btn-info mr-2" onClick={addReview}>Yes</button> 
        <button className="btn btn-info" onClick={cancelReview}>No</button> 
       </div>
    )
  }
}

export default Confirmation