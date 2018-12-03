import React from 'react'
import BusinessListing from './Business/BusinessListing'
import BusinessIndividual from './Business/BusinessIndividual'
import FilterNav from './Navbar/FilterNav'
class Home extends React.Component {

  renderListings = () => {
      if (this.props.filteredBusinesses.length > 0){
      return this.props.filteredBusinesses.map(business => 
        <BusinessListing 
          business={business} 
          selectBusiness={this.props.selectBusiness}
          key={business.id}
          />)}
      else if (this.props.filteredBusinesses.length === 0){
        return (
          <div className="p-2">
            No businesses match your search criteria, sorry!
          </div>)
      }
    }


  render () {
    
    const { clearFilters, filterBusinesses, user, selectedBusiness, deselectBusiness, filterProps } = this.props
    return (
        <div>
       
          {selectedBusiness ? null : <FilterNav clearFilters={clearFilters} filterBusinesses={filterBusinesses} filterProps={filterProps}/>}
        <div className="list-group">
          {selectedBusiness ? <BusinessIndividual business={selectedBusiness} deselectBusiness={deselectBusiness} user={user}/> : this.renderListings()}
        </div>
      </div>
    )
  }
}

export default Home
