import React from 'react'
import { Link } from 'react-router-dom'
import BusinessListing from './Business/BusinessListing'
import FilterNav from './Navbar/FilterNav'
class Home extends React.Component {

  renderListings = () => {
      if (this.props.filteredBusinesses.length > 0){
      return this.props.filteredBusinesses.map(business => 
        <Link to={business.id.toString()}> 
          <BusinessListing 
            business={business} 
            key={business.id} />
        </Link>)}
      else if (this.props.filteredBusinesses.length === 0){
        return (
          <div className="p-2">
            No businesses match your search criteria, sorry!
          </div>)
      }
    }

    render () {
    
    const { clearFilters, filterBusinesses, filterProps } = this.props
    return (
        <div>
          <FilterNav clearFilters={clearFilters} filterBusinesses={filterBusinesses} filterProps={filterProps}/>
        <div className="list-group">
          {this.renderListings()}
        </div>
      </div>
    )
  }
}

export default Home
