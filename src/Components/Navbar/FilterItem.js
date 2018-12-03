import React from 'react'



class FilterItem extends React.Component {

  render () {
    const { filterProp, filterBusinesses, filterName } = this.props
    return(
        <a className="dropdown-item" href="#" onClick={() => filterBusinesses(filterProp, filterName)}>{filterProp}
        </a>
    )
  }

} 

export default FilterItem
