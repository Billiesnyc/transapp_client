    import React, { Component } from 'react';


class ReviewItem extends Component {

    render(){
        const { review } = this.props
        return(
            < >
                <p>{review.review_text}</p>
                <p className="font-weight-light">Overall rating: 
                        {review.up ? <i className="material-icons green align-bottom pl-2">thumb_up</i> 
                        : <i className="material-icons red align-bottom pl-2">thumb_down</i>}</p>
                <p className="font-weight-light">Gender identity: <b>{review.gender}</b></p>
                <div className="border-top pb-3"></div>
            </ >
            )
        }
        }



export default ReviewItem;