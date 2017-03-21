import React, { Component } from 'react';
import Script from 'react-load-script';
import ReactGeosuggest from '../../src/ReactGeosuggest';
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
    const { googleApiLoaded } = this.state;
    return (
      <div>
        {!googleApiLoaded
          ? <Script
              url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDvgbceyFAP8QbGpNSVt45PPGDUylFokI&amp;libraries=places"
              onLoad={this.onGoogleApiLoaded}
              onError={this.onGoogleApiError}
            />
          : null}
        <h1>@synapsestudios/react-geosuggest</h1>
        {googleApiLoaded
          ? <ReactGeosuggest
              onSelect={this.onSelect}
              value={this.state.result}
            />
          : null}
        <h3>Example Usage:</h3>
        <pre>
          {
            `import React, { Component } from 'react';
import Script from 'react-load-script';
import ReactGeosuggest from '@synapsestudios/react-geosuggest';

import '@synapsestudios/react-geosuggest/lib/react-geosuggest.min.css';

class SetStateExample extends Component {
  state = {
    googleApiLoaded: false,
    googleApiError: false,
    result: null,
  };

  onGoogleApiLoaded = () => this.setState({ googleApiLoaded: true });

  onGoogleApiError = error => this.setState({ googleApiError: true });

  onSelect = result => this.setState(result);

  render() {
    const { googleApiLoaded } = this.state;
    return (
      <div>
        <Script
          url='https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places'
          onLoad={this.onGoogleApiLoaded}
          onError={this.onGoogleApiError}
        />
        {googleApiLoaded
          ? <ReactGeosuggest
              onSelect={this.onSelect}
              value={this.state.result}
            />
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
