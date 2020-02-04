import React from 'react'
import {DropdownItem} from 'reactstrap';


class FilterItem extends React.Component {

  render () {
    const { filterProp, filterBusinesses, filterName } = this.props
    return(
      <DropdownItem onClick={() => filterBusinesses(filterProp, filterName)}>
        {filterProp}
      </DropdownItem>
    )
  }

} 

export default FilterItem
