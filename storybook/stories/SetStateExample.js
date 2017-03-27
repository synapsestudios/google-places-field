import React, { Component } from 'react';
import Script from 'react-load-script';
import GooglePlaces from '../../src/GooglePlaces';
import { action } from '@kadira/storybook';

import '../../styles/index.css';

class SetStateExample extends Component {
  state = {
    googleApiLoaded: false,
    googleApiError: false,
    result: null,
  };

  onGoogleApiLoaded = () => {
    action('googleApiLoaded')(true); // Log to storybook's "action-logger"
    this.setState({ googleApiLoaded: true });
    console.log('googleApiLoaded');
  };

  onGoogleApiError = error => {
    action('googleApiError')(true); // Log to storybook's "action-logger"
    this.setState({ googleApiError: true });
    console.log('googleApiError');
  };

  onSelect = result => {
    action('onSelect')(result); // Log to storybook's "action-logger"
    this.setState(result);
  };

  render() {
    const { googleApiLoaded, googleApiError } = this.state;
    return (
      <div>
        {!googleApiLoaded
          ? <Script
              url="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&amp;libraries=places"
              onLoad={this.onGoogleApiLoaded}
              onError={this.onGoogleApiError}
            />
          : null}
        <h1>@synapsestudios/react-google-places</h1>
        {googleApiLoaded ? <GooglePlaces onSelect={this.onSelect} /> : null}
        {googleApiError
          ? <div>An error occured loading the Google Places API</div>
          : null}
        <h3>Example Usage:</h3>
        <pre>
          {
            `import React, { Component } from 'react';
import Script from 'react-load-script';
import GooglePlaces from '@synapsestudios/react-google-places';

import '@synapsestudios/react-google-places/lib/react-google-places.min.css';

class SetStateExample extends Component {
  state = {
    googleApiLoaded: false,
    googleApiError: false,
    result: null,
  };

  onGoogleApiLoaded = () => {
    this.setState({ googleApiLoaded: true });
  };

  onGoogleApiError = error => {
    this.setState({ googleApiError: true });
  };

  onSelect = result => {
    console.log(result);
    this.setState(result);
  };

  render() {
    const { googleApiLoaded, googleApiError } = this.state;
    return (
      <div>
       {!googleApiLoaded
          ? <Script
            url="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"
            onLoad={this.onGoogleApiLoaded}
            onError={this.onGoogleApiError}
          /> : null}
        {googleApiLoaded
          ? <GooglePlaces onSelect={this.onSelect} />
          : null}
        {googleApiError
          ? <div>An error occured while loading the Google Places API</div>
          : null}
      </div>
    );
  }
}

export default SetStateExample;
`
          }
        </pre>
      </div>
    );
  }
}

export default SetStateExample;
