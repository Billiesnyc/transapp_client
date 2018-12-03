import React from 'react'


class FilterProps extends React.Component {


    renderFilterProps = () => {
        return this.props.filterProps.map((filterProp, idx) => <li className="nav-item active p-2" key={idx}> {filterProp} </li>)
    }


  render () {
    
    const { clearFilters } = this.props

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active p-2">
                Filters: 
            </li> 
                {this.renderFilterProps()}
            <li className="nav-item active" onClick={clearFilters}>
                <button className="btn btn-outline-secondary">Clear Filters</button>
            </li>
          </ul>
          </nav>
          </div>
    )
  }
}

export default FilterProps
