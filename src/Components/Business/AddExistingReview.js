import React from 'react'
import API from '../API'
import { Button } from 'reactstrap';


class AddReview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        up: false,
        review: "",
        clickedUp: false,
        clickedDown: false
        };
    }

    thumbUp = () => {
        this.setState({ up: true, clickedUp: !this.state.clickedUp })
        if (this.state.clickedDown){
            this.setState({ clickedDown: false })
        }
    }

    thumbDown = () => {
        this.setState({ up: false, clickedDown: !this.state.clickedDown  })
        if (this.state.clickedUp){
            this.setState({ clickedUp: false })
        }
    }

    handleChange = (e) => {
        this.setState({ review: e.target.value })
    }

   handleSubmit = (e) => {
        e.preventDefault()
        API.createOnlyReview(this.props.business.id, this.state.review, this.state.up, this.props.user.id)
        .then(data => this.props.getReviews(data))
        .then(this.props.popReviewForm)
   }    
  
  render () {
    const { thumbUp, thumbDown, handleChange, handleSubmit } = this
    const { popReviewForm } = this.props
    const { clickedUp, clickedDown } = this.state
    return (
       <div className="border-top pt-3 mb-3">
       <h3>Add Review</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="Review">Review</label>
                    <textarea className="form-control" onChange={handleChange} id="Review" rows="3"></textarea>
                </div>
            <div className="form-group">
            <label htmlFor="Review">Overall experience</label><br />
            {clickedUp ? 
                <i className="material-icons green mr-1 add-review" onClick={thumbUp}>thumb_up</i>
                :
                <i className="material-icons grey mr-1 add-review" onClick={thumbUp}>thumb_up</i>
            } 
            {clickedDown ? 
             <i className="material-icons red add-review" onClick={thumbDown}>thumb_down</i>
                :
            <i className="material-icons grey add-review" onClick={thumbDown}>thumb_down</i>
            }
            </div>
            <Button type="submit" color="primary" className="btn login-button">Submit</Button>
            <Button color="light" onClick={popReviewForm}>Cancel</Button>
        </form>
       </div>
    )
  }
}

export default AddReview
