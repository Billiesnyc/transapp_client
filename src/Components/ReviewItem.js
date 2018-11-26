    import React, { Component } from 'react';


class ReviewItem extends Component {

    render(){
        const { review } = this.props
        return(
            <div>
                {review.review_text} | {review.up ? <i class="material-icons green">thumb_up</i> : <i class="material-icons red">thumb_down</i>} | {review.gender}
            </div>
            )
        }
        }



export default ReviewItem;