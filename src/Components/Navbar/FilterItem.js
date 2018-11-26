import React from 'react'



class FilterItem extends React.Component {

  render () {
    const { prop, filterBusinesses, filterName } = this.props
    return(
        <a className="dropdown-item" href="#" onClick={() => filterBusinesses(prop, filterName)}>{prop}
        </a>
    )
  }

} 

export default FilterItem
