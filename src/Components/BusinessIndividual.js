import React, { Component } from 'react';
import API from './API'
import ReviewItem from './ReviewItem'
import { Link } from 'react-router-dom'
import MapIndividual from './Map/MapIndividual'
import '../style.css'
class BusinessIndividual extends Component {

    state = {
        reviews: [],
        score: {},
    }

    getReviews = () => {
        API.getBusiness(this.props.business.id)
            .then(data => this.setState({ reviews: data[0], score: data[1] }))
    }

    componentDidMount(){
        this.getReviews()
    }

    showReviews = () => {
        return this.state.reviews.map(review => <ReviewItem review={review} key={review.id}/>)
    }

    render(){
        const { business, deselectBusiness } = this.props
        const { showReviews } = this
        const { score } = this.state
        return(
            <div className="container p-4">
            <div className="row">
                <div className="col-8">
                <Link to="/home" className="navbar-brand">
                <button className="btn btn-outline-info" onClick={deselectBusiness}>Back</button></Link><br /><br />
                <h1>{business.name}</h1>
                <p>Location: {business.city}, {business.state}, {business.country}</p>
                <p>Category: {business.category} {business.subcategory}</p>
                <p>Rating: {score.overall_up} <i className="material-icons green">thumb_up</i>| {score.overall_down} <i className="material-icons red">thumb_down</i></p>
                </div>
                <div className="col-4">
                <MapIndividual lat={Number(business.latitude)} long={Number(business.longitude)} place={business.places_id} />
                </div>
                </div>
            <div className="row">
                <div className="col">
                <h1>Reviews</h1>
                {showReviews()}
                </div>
            
            </div>
            </div>
            )
        }
        }



export default BusinessIndividual;