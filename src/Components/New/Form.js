import React from 'react'
import API from '../API'
import BusinessIndividual from '../Business/BusinessIndividual'

class Form extends React.Component {

    state = {
        up: false,
        review: "",
        business: null
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

    deselectBusiness = () => {
        this.setState({ business: null })
      }

   handleSubmit = (e) => {
        e.preventDefault()
        let latitude = this.props.place.geometry.location.lat()
        let longitude = this.props.place.geometry.location.lng()
        let name = this.props.place.name
        let places_id = this.props.place.place_id
        let category = this.props.place.types[0].split('_').join(' ').replace(/\b\w/g, l => l.toUpperCase())
        let city = this.props.place.address_components[3].long_name
        let state = this.props.place.address_components[5].long_name
        let country =this.props.place.address_components[6].long_name

        API.createReview(latitude, longitude, name, places_id, category, city, state, country, this.state.review, this.state.up, this.props.user.id)
        .then(business => 
            this.setState({ business }))
   }    
  
  render () {
    const { thumbUp, thumbDown, handleChange, deselectBusiness } = this
    const { place } = this.props
    const { business } = this.state
    return (
       < >
        {business ? <BusinessIndividual business={business} deselectBusiness={deselectBusiness} /> 
        :
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
            <i className="material-icons green mr-1 add-review" onClick={thumbUp}>thumb_up</i> <i className="material-icons red add-review" onClick={thumbDown}>thumb_down</i>
            </div>
            <button type="submit" className="btn blue-button">Submit</button>
            
        </form>
       </div>}
       </>
    )
  }
}

export default Form
