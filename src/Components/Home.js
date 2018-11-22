import React from 'react'
import BusinessListing from './BusinessListing'
import BusinessIndividual from './BusinessIndividual'

class Home extends React.Component {

  state = {
    selectedBusiness: null
  }

  selectBusiness = (selectedBusiness) => {
    this.setState({ selectedBusiness })
  }

  deselectBusiness = () => {
    this.setState({ selectedBusiness: null })
  }

  renderListings = () => {
    return this.props.businesses.map(business => 
        <BusinessListing 
          business={business} 
          selectBusiness={this.selectBusiness}
          key={business.id}
          />)
  }


  render () {
    const { selectedBusiness } = this.state
    const { deselectBusiness } = this
    return (
        <div>
          {selectedBusiness ? <BusinessIndividual business={selectedBusiness} deselectBusiness={deselectBusiness} /> : this.renderListings()}
        </div>
    )
  }
}

export default Home
