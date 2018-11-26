import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'


const google = window.google

export default class SearchBox extends React.Component {

    state = {
        getPlace: null
    }
  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func
  }
  render() {
    return <input ref="input" {...this.props} className="form-control" type="text"/>;
  }

  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }

  logchange = () => {
      this.setState({ getPlace: this.searchBox.getPlaces() })
      
    let lat = this.state.getPlace[0].geometry.location.lat()
    let lng = this.state.getPlace[0].geometry.location.lng()
  }

  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    // https://developers.google.com/maps/documentation/javascript/events#removing
    google.maps.event.clearInstanceListeners(this.searchBox);
  }
}