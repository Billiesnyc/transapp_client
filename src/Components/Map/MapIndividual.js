import React from 'react'
import GoogleMapReact from 'google-map-react'
import Pin from './pin3.png'

const PinComp = () => <div><img src={Pin} width="30 em" alt="Map Marker"></img></div>;

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
