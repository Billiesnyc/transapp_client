import React from 'react'
import Map from './Map/Map'

class Home extends React.Component {

  state = {
    markerPosition: { lat: 51.5074, lng: 0.1278 },
    showRecommendationBox: false,
    markers: [{ lat: 51.5074, lng: 0.1278 }],
    infoWindow: false,
    selectedMarker: null
  }

  moveMarker = (e, marker) => {
    this.setState({ 
      markerPosition: { lat: e.latLng.lat(), lng: e.latLng.lng() },
      showRecommendationBox: true,
      markers: [...this.state.markers, { lat: e.latLng.lat(), lng: e.latLng.lng() }],
      infoWindow: true
    })
    
  }


  cancelMarker = () => {
    this.setState({ 
      infoWindow: false,
      showRecommendationBox: false,
      markers: this.state.markers.filter(marker => marker.lat !== this.state.markerPosition.lat)
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.markerPosition, e.target.name.value, e.target.rating.value)
    this.setState({ markers: [...this.state.markers, this.markerPosition] })
  }

  handleMarkerClick = (e, marker) => {
    this.setState({ 
      showRecommendationBox: !this.state.showRecommendationBox,
      infoWindow: true,
      selectedMarker: marker
      })
  }


  render () {
    return (
        <div>
           <Map
              markers={this.state.markers}
              onMarkerClick={this.handleMarkerClick}
              markerPosition={this.state.markerPosition}
              moveMarker={this.moveMarker}
              cancelMarker={this.cancelMarker}
              selectedMarker={this.state.selectedMarker}
      />
        </div>
    )
  }
}

export default Home
