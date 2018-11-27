import React from 'react'
import API from '../API'


class AddReview extends React.Component {

    state = {
        up: false,
        review: "",
    }

    thumbUp = () => {
        this.setState({ up: true })
    }

    thumbDown = () => {
        this.setState({ up: false })
    }

    handleChange = (e) => {
        this.setState({ review: e.target.value })
    }


   handleSubmit = (e) => {
        e.preventDefault()
        API.createOnlyReview(this.props.business.id, this.state.review, this.state.up, this.props.user.id)
        .then(this.props.popReviewForm)
        .then(this.props.getReviews)
   }    
  
  render () {
    const { thumbUp, thumbDown, handleChange } = this
    const { popReviewForm } = this.props
    return (
       <div className="border-top pt-3 mb-3">
       <h3>Add Review</h3>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label htmlFor="Review">Review</label>
            <textarea className="form-control" onChange={handleChange} id="Review" rows="3"></textarea>
            </div>
            <div className="form-group">
            <label htmlFor="Review">Overall experience</label><br />
            <i className="material-icons green mr-1 add-review" onClick={thumbUp}>thumb_up</i> <i className="material-icons red add-review" onClick={thumbDown}>thumb_down</i>
            </div>
            <button type="submit" className="btn blue-button">Submit</button>
            <button className="btn btn-light" onClick={popReviewForm}>Cancel</button>
        </form>
       </div>
    )
  }
}

export default AddReview
