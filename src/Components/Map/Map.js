import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

import SavedMarkers from "./SavedMarkers"

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBgvxsH8mHzVma5B_S74AfBFd390Eg6pXE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 51.5074, lng: 0.1278 }}
    clickableIcons={true}
    onClick={e => props.moveMarker(e)}
  >
    {props.markers.map((marker, idx) => {
            return (
                <SavedMarkers 
                position={marker} 
                onClick={props.onMarkerClick} 
                key={idx}
                selectedMarker={props.selectedMarker}
                marker={marker}
            /> 
            )
    })
    }
  </GoogleMap>
)

export default Map;