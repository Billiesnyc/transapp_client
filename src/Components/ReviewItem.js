import React, { Component } from 'react';


class ReviewItem extends Component {

    render(){
        const { review } = this.props
        return(
            <div>
                {review.review_text} | {review.up ? "+1" : "-1"} | {review.gender}
            </div>
            )
        }
        }



export default ReviewItem;