import React from 'react'
import API from '../API'
import FilterItem from './FilterItem'
import FilterProps from  './FilterProps'

class FilterNav extends React.Component {

    state = {
        cities: [],
        categories: []
    }

    componentDidMount() {
        API.getCities()
        .then(data => this.setState({ cities : data }))
        API.getCategories()
        .then(data => this.setState({ categories : data }))
    }

    renderFilter = (mapItem, name) => {
        return mapItem.map((filterProp, idx) => <FilterItem filterProp={filterProp} key={idx} filterBusinesses={this.props.filterBusinesses} filterName={name}/>)
    }


  render () {

    const { clearFilters, filterProps } = this.props
    const { renderFilter } = this
    const { categories, cities } = this.state

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter by City
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {renderFilter(cities, 'city')}
      
        </div>
      
         </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter by Category
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {renderFilter(categories, 'category')}
        </div>
         </li>
          {/* <li className="nav-item">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Type and hit enter to search" aria-label="Search" />
            </form>
          </li> */}
          
          </ul>
          </nav>
        {this.props.filterProps.length > 0 ? <FilterProps filterProps={filterProps} clearFilters={clearFilters} />  : null }
          </div>
    )
  }
}

export default FilterNav
