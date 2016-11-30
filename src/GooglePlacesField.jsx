import React, { Component, PropTypes } from 'react';
import Geosuggest from 'react-geosuggest';

class GooglePlacesField extends Component
{
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    validationMessages: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    id: 'google-places-field',
  }

  constructor() {
    super();

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(data) {
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

    this.props.onSelect(formattedData);
  }

  renderValidationMessages() {
    if (this.props.validationMessages && this.props.validationMessages.length) {
      return this.props.validationMessages.map(message => (
        <span className="address--validation-message" key={message}>
          {message}
        </span>
      ));
    }

    return null;
  }

  render() {
    return (
      <div>
        {this.renderValidationMessages()}
        <Geosuggest
          label={this.props.label}
          id={this.props.id}
          placeholder="Start Typing"
          onSuggestSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default GooglePlacesField;
