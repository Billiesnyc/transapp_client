import React from 'react'
import API from '../API'
import { withRouter, Link } from 'react-router-dom' 

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        up: false,
        review: "",
        business: null,  
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

    deselectBusiness = () => {
        this.setState({ business: null })
      }

   handleSubmit = (e) => {
       e.preventDefault();
        let latitude = this.props.place.geometry.location.lat()
        let longitude = this.props.place.geometry.location.lng()
        let name = this.props.place.name
        let places_id = this.props.place.place_id
        let category = this.props.place.types[0].split('_').join(' ').replace(/\b\w/g, l => l.toUpperCase())
        
        let country = this.props.place.address_components.find(a => a.types[0] === "country").short_name
        
        if (country === "USA" || country === "US"){
            let city = this.props.place.address_components.find(a => a.types[0] === "locality").long_name
            let state = this.props.place.address_components.find(a => a.types[0] === "administrative_area_level_1").short_name
            API.createUSAReview(latitude, longitude, name, places_id, category, city, state, country, this.state.review, this.state.up, this.props.user.id)
            .then(business => this.props.createNewBusiness(business))
        }
        else{
        let city = this.props.place.address_components.find(a => a.types[0] === "postal_town").long_name
        API.createReview(latitude, longitude, name, places_id, category, city, country, this.state.review, this.state.up, this.props.user.id)
        .then(business => this.props.createNewBusiness(business))
        }
   }    
  
  render () {
      
    const { thumbUp, thumbDown, handleChange } = this
    const { place } = this.props
    const { clickedUp, clickedDown } = this.state
    
    return (
        <div>
        <h3>Adding a review for {place.name}</h3>
        <p>{place.formatted_address}</p>
        <form onSubmit={this.handleSubmit}>
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
            <button type="submit" className="btn blue-button">Submit</button>
            <Link to='/home'><button className="btn btn-outline-secondary">Cancel</button></Link>
        </form>
       </div>

    )
  }
}

export default withRouter(Form)
