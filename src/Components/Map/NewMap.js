import React from 'react'
import GoogleMapReact from 'google-map-react';



class MapIndividual extends React.Component {
    
    static defaultProps = {
        zoom: 13
      };
    

  render () {

    return (
        <div style={{ height: '50vh', width: '100%' }}>
         <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={{"lat":  -33.8688, "lng": 151.2195}}
          defaultZoom={this.props.zoom}
        >
        
        </GoogleMapReact>
        </div>
    )
  }
}

export default MapIndividual
