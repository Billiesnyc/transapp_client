import React, { Component } from 'react';
import API from '../API'
import ReviewItem from './ReviewItem'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
// import MapIndividual from '../Map/MapIndividual'
import AddReview from './AddReview'
import '../../style.css'

class BusinessIndividual extends Component {

    constructor(props) {
        super(props);
        this.state = {
        reviews: [],
        score: {},
        reviewForm: false
        };
    }

    componentDidMount = () => {
        API.getBusiness(this.props.business.id)
        .then(data => this.setState({ reviews: data[0], score: data[1] }))
    }

    showReviews = () => {
        return this.state.reviews.map(review => <ReviewItem review={review} key={review.id}/>)
    }

    popReviewForm = () => {
        this.setState({ reviewForm: !this.state.reviewForm })
    }

    render(){
        const { user, business } = this.props
        const { showReviews, popReviewForm, getReviews } = this
        const { score, reviewForm, reviews } = this.state
        return(
            <div className="container p-4">
             <div className="row">
                <div className="col-8">
                    <Link to="/home" className="navbar-brand">
                        <Button outline color="secondary">Back</Button>
                    </Link>
                    <br /><br /> 
                     <h1>{business.name}</h1>
                        <p>Location: {business.city}{business.state ? ", " + business.state : null}, {business.country}</p>
                        <p>Category: {business.category} {business.subcategory}</p>
                        <p>Rating: {score.overall_up} <i className="material-icons green align-bottom p-1 border-right mr-1">thumb_up</i>
                        {score.overall_down} <i className="material-icons red align-bottom p-1">thumb_down</i></p>
                    {reviewForm ? null : 
                        <Button color="primary" className="login-button" onClick={popReviewForm}>Add Review</Button> 
                        }
                    {reviewForm ? 
                        <AddReview 
                            popReviewForm={popReviewForm}
                            business={business}
                            user={user}
                            getReviews={getReviews}
                            /> 
                        : null}
                </div>
                {/* <div className="col-4">
                    <MapIndividual 
                        lat={business.latitude ? Number(business.latitude) : 15} 
                        long={business.longitude ? Number(business.longitude) : 10} 
                        place={business.places_id? business.places_id : "ChIJ3RlqFuta04URQmbHMgLij_U"} />
                    <a href={'https://www.google.com/maps/place/?q=place_id:' + this.state.business.places_id} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-secondary">View on Google Maps</button></a>
                </div> */}
            </div>
            <div className="row border-top">
                <div className="col">
                    <h1>Reviews</h1>
                        {reviews ? showReviews() : null}
                </div>
            </div> 
            </div>
            )
        }
        }



export default BusinessIndividual;