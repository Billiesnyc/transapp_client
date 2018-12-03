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
    return <input ref="input" placeholder="Search for business..." className="form-control" type="text"/>;
  }


  logChange = () => {
    this.setState({ getPlace: this.searchBox.getPlaces() })
    this.props.confirmationPopout(true, this.state.getPlace[0])
  }

  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.logChange);
  }
  
}