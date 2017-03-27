# [@synapsestudios/react-google-places](https://synapsestudios.github.io/react-google-places/)

A slightly-modified implementation of [React Geosuggest](https://github.com/ubilabs/react-geosuggest).

[![npm version](https://img.shields.io/npm/v/@synapsestudios/react-google-places.svg?style=flat)](https://www.npmjs.com/package/@synapsestudios/react-google-places)
[![react-google-places dependencies](https://img.shields.io/david/synapsestudios/react-google-places.svg)](https://david-dm.org/synapsestudios/react-google-places)
[![react-google-places peer dependencies](https://img.shields.io/david/peer/synapsestudios/react-google-places.svg)](https://david-dm.org/synapsestudios/react-google-places?type=peer)

## Demo

A demo is available at [https://synapsestudios.github.io/react-google-places/](https://synapsestudios.github.io/react-google-places/)

## Usage

#### Installing via CLI
```js
// yarn
yarn add @synapsestudios/react-google-places

// npm
npm install --save @synapsestudios/react-google-places
```

#### Importing JS
```js
import GooglePlaces from '@synapsestudios/react-google-places';
```

#### Importing CSS
```js
// Minified, autoprefixed css
import '@synapsestudios/react-google-places/lib/react-google-places.min.css';

// Not-minified, not-autoprefixed css
import '@synapsestudios/react-google-places/lib/react-google-places.css';
```

#### Using Stylus
If you are using Stylus you can import the .styl file into your build:
```styl
@import '@synapsestudios/react-google-places/lib/react-google-places.styl';
```
! See the [Stylus Variables](#stylus-variables) section below for variables/details.

#### Using with an ES6 `Class` and React Component State
```jsx
import React, { Component } from 'react';
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
```
<!--
#### Using with a ReduxForm (v6) `Field` Component
```
// TODO: Add simple example to storybook + readme
```
-->

## API

### Required `Props`

#### onSelect: (required)

`onSelect` is the callback `function` invoked when a user selects an address from the Google Places dropdown.
`onSelect` returns an `object` with formatted location data as well as the original Google Places data object.
```js
onSelect: PropTypes.func.isRequired,
```

### Additional `Props`

Any additional props will be passed thru directly to the [React Geosuggest](https://github.com/ubilabs/react-geosuggest) component. See their documentation for additional props/usage.

### Stylus Variables
react-google-places comes with a set of stylus variables that can be overridden to add your own project-specific theming, as shown below:

```styl
/* Theming by overriding default stylus variables with your projects colors */

$react-google-places--border-color = #b1c1c5;
$react-google-places--box-shadow = 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

@import '@synapsestudios.com/react-google-places/css/react-google-places.styl';
```

## Contributing

To run the project on your own computer:
* Clone this repository
* `yarn install` or `npm install`
* `yarn run storybook` or `npm run storybook`
* Visit http://localhost:5000/
* Changes made to files in the `src` directory should immediately compile and be visible in your browser.
