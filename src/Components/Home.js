import React from 'react'
import BusinessListing from './BusinessListing'
import BusinessIndividual from './BusinessIndividual'
import FilterNav from './Navbar/FilterNav'
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
    if (this.props.filteredBusinesses.length > 0){
      return this.props.filteredBusinesses.map(business => 
        <BusinessListing 
          business={business} 
          selectBusiness={this.selectBusiness}
          key={business.id}
          />)
    }
    else {
    return this.props.businesses.map(business => 
        <BusinessListing 
          business={business} 
          selectBusiness={this.selectBusiness}
          key={business.id}
          />
        )}}


  render () {
    const { selectedBusiness } = this.state
    const { deselectBusiness } = this
    const { clearFilters, filterBusinesses } = this.props
    return (
        <div>
          {selectedBusiness ? null : <FilterNav clearFilters={clearFilters} filterBusinesses={filterBusinesses}/>}
        <div className="list-group">
          {selectedBusiness ? <BusinessIndividual business={selectedBusiness} deselectBusiness={deselectBusiness} /> : this.renderListings()}
        </div>
      </div>
    )
  }
}

export default Home
