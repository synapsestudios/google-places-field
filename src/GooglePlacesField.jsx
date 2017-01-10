/* eslint import/no-unresolved: 0 */
/* eslint import/extensions: 0 */
import React, { Component, PropTypes } from 'react';
import Geosuggest from 'react-geosuggest';
import omit from 'lodash.omit';
import './style.css';

class GooglePlacesField extends Component {
  static propTypes = {
    id: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    id: 'google-places-field',
    placeholder: 'Start Typing',
  }

  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(data) {
    if (!data.gmaps) {
      return;
    }

    const formattedData = {};
    let streetNumber = '';
    let route = '';
    data.gmaps.address_components.forEach((addressPart) => {
      if (addressPart.types.indexOf('street_number') !== -1) {
        streetNumber = addressPart.long_name;
      }
      if (addressPart.types.indexOf('route') !== -1) {
        route = addressPart.long_name;
      }
      if (addressPart.types.indexOf('locality') !== -1) {
        formattedData.city = addressPart.long_name;
      }
      if (addressPart.types.indexOf('administrative_area_level_1') !== -1) {
        formattedData.state = addressPart.short_name;
      }
      if (addressPart.types.indexOf('postal_code') !== -1) {
        formattedData.zip = addressPart.long_name;
      }
    });
    formattedData.address = `${streetNumber} ${route}`;
    formattedData.latitude = data.location.lat;
    formattedData.longitude = data.location.lng;
    formattedData.data = data;

    this.props.onSelect(formattedData);
  }

  render() {
    const passThruProps = omit(this.props, ['id', 'onSelect', 'placeholder']);
    return (
      <Geosuggest
        ref={(input) => { this.geosuggestInputRef = input; }}
        id={this.props.id}
        onSuggestSelect={this.onSelect}
        placeholder={this.props.placeholder}
        {...passThruProps}
      />
    );
  }
}

export default GooglePlacesField;
