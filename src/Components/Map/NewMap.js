import React from 'react'
import GoogleMapReact from 'google-map-react';
import SearchBox from './SearchBox'


class MapIndividual extends React.Component {
    
    static defaultProps = {
        zoom: 13
      };
    

  render () {

    return (
        <div style={{ height: '50vh', width: '100%' }}>
        <SearchBox />
         
        </div>
    )
  }
}

export default MapIndividual
