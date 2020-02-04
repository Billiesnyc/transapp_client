import React from 'react'
import API from '../API'
import { Navbar, UncontrolledDropdown,  DropdownToggle,  DropdownMenu } from 'reactstrap';
import FilterItem from './FilterItem'
import FilterProps from  './FilterProps'

class FilterNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        cities: [],
        categories: []
        };
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
        <Navbar color="light" light expand="md">
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Filter by City
              </DropdownToggle>
              <DropdownMenu right>
              {renderFilter(cities, 'city')}
              </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Filter by Category
              </DropdownToggle>
              <DropdownMenu right>
              {renderFilter(categories, 'category')}
              </DropdownMenu>
          </UncontrolledDropdown>
        
          {/* <li className="nav-item">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Type and hit enter to search" aria-label="Search" />
            </form>
          </li> */}
        </Navbar>
        {this.props.filterProps.length > 0 ? <FilterProps filterProps={filterProps} clearFilters={clearFilters} />  : null }
          </div>
    )
  }
}

export default FilterNav
