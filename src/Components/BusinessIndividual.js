import React, { Component } from 'react';
import API from './API'
import ReviewItem from './ReviewItem'
import MapIndividual from './Map/MapIndividual'

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
            <div>
                <button onClick={deselectBusiness}>Back</button><br />
                {business.name} - {business.city}, {business.state}, {business.country}<br />
                {business.category} {business.subcategory}
                {score.overall_up} + | {score.overall_down} -
                <MapIndividual lat={Number(business.latitude)} long={Number(business.longitude)} place={business.places_id} />
                <h1>Reviews</h1>
                {showReviews()}
            </div>
            )
        }
        }



export default BusinessIndividual;