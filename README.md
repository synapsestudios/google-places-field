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
import GooglePlaces from '@synapsestudios/react-google-places';
import '@synapsestudios/react-google-places/lib/react-google-places.min.css';

class SetStateExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };
  }

  onChange = result => this.setState(result);

  render() {
    return <GooglePlaces onChange={this.onChange} value={this.state.result} />;
  }
}

export default SetStateExample;
```

#### Using with a ReduxForm (v6) `Field` Component
```
// TODO: Add simple example to storybook + readme
```

## API

### Required `Props`

#### onChange: (required)

`onChange` is the callback `function` necessary to update the parent component with the final cropped image file. `onChange` receives a `File` object as an argument.
```js
onChange: PropTypes.func.isRequired,
```

#### value: (required)

`onChange` is the callback `function` necessary to update the parent component with the final cropped image file. `onChange` receives a `File` object as an argument.
```js
value: PropTypes.shape({
  result: PropTypes.any, // Resulting DataURL from Cropper.js crop box
  filename: PropTypes.any, // Original filename from uploaded file
  filetype: PropTypes.any, // Original MIME type from uploaded file
  src: PropTypes.any, // Original DataURL from the FileReader.result
  error: PropTypes.any, // Error returned from fileSize/fileType validators
}).isRequired,
```

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
