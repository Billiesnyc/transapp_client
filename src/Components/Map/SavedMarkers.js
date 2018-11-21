import React, { Component } from 'react';
import { Marker, InfoWindow } from "react-google-maps"

class SavedMarkers extends Component {

    render(){
        return(
            <Marker 
                position={this.props.marker}
                onClick={e => this.props.onClick(e, this.props.marker)} 
                key={this.props.marker.lat}
                selectedMarker={this.props.selectedMarker}
                >
            {this.props.selectedMarker === this.props.marker &&
            
                 <React.Fragment>
                  <InfoWindow
                    key={this.props.marker.created_at}>
                    <div className="infobox">

                    <label>Review:</label><br/>

                      <textarea
                        rows="1" cols="30"
                        name="review" 
                        />
                      <br/>

                     
                    </div>
                  </InfoWindow>
                </React.Fragment>
              }
              </Marker>)
            }
        
    }



export default SavedMarkers;