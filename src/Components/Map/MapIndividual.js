import React from 'react'
import GoogleMapReact from 'google-map-react';

const PinComp = () => <div><img src="https://banner2.kisspng.com/20180525/etr/kisspng-google-map-maker-google-maps-gps-pin-5b08a401590c40.5778918615272929293648.jpg" width="30 em"></img></div>;

class MapIndividual extends React.Component {
    
    static defaultProps = {
        zoom: 15
      };
    

  render () {
  
    return (
        <div style={{ height: '50vh', width: '100%' }}>
         <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={{"lat": this.props.lat, "lng": this.props.long}}
          defaultZoom={this.props.zoom}
        >
        <PinComp
            lat={this.props.lat}
            lng={this.props.long}
          />
        </GoogleMapReact>
        </div>
    )
  }
}

export default MapIndividual
