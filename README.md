# [@synapsestudios/react-geosuggest](https://synapsestudios.github.io/react-geosuggest/)

A slightly-modified implementation of [React Geosuggest](https://github.com/ubilabs/react-geosuggest).

[![npm version](https://img.shields.io/npm/v/@synapsestudios/react-geosuggest.svg?style=flat)](https://www.npmjs.com/package/@synapsestudios/react-geosuggest)
[![react-geosuggest dependencies](https://img.shields.io/david/synapsestudios/react-geosuggest.svg)](https://david-dm.org/synapsestudios/react-geosuggest)
[![react-geosuggest peer dependencies](https://img.shields.io/david/peer/synapsestudios/react-geosuggest.svg)](https://david-dm.org/synapsestudios/react-geosuggest?type=peer)

## Demo

A demo is available at [https://synapsestudios.github.io/react-geosuggest/](https://synapsestudios.github.io/react-geosuggest/)

## Usage

#### Installing via CLI
```js
// yarn
yarn add @synapsestudios/react-geosuggest

// npm
npm install --save @synapsestudios/react-geosuggest
```

#### Importing JS
```js
import ReactGeosuggest from '@synapsestudios/react-geosuggest';
```

#### Importing CSS
```js
// Minified, autoprefixed css
import '@synapsestudios/react-geosuggest/lib/react-geosuggest.min.css';

// Not-minified, not-autoprefixed css
import '@synapsestudios/react-geosuggest/lib/react-geosuggest.css';
```

#### Using Stylus
If you are using Stylus you can import the .styl file into your build:
```styl
@import '@synapsestudios/react-geosuggest/lib/react-geosuggest.styl';
```
! See the [Stylus Variables](#stylus-variables) section below for variables/details.

#### Using with an ES6 `Class` and React Component State
```jsx
import React, { Component } from 'react';
import ReactGeosuggest from '@synapsestudios/react-geosuggest';
import '@synapsestudios/react-geosuggest/lib/react-geosuggest.min.css';

class SetStateExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };
  }

  onChange = result => this.setState(result);

  render() {
    return <ReactGeosuggest onChange={this.onChange} value={this.state.result} />;
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

### Optional `Props`

#### canvasHeight:

`canvasHeight` is a `string` for the container inline style `height` property.
```js
canvasHeight: PropTypes.string, // default: '360px'
```

#### canvasWidth:

`canvasWidth` is a `string` for the container inline style `width` property.

```js
canvasWidth: PropTypes.string, // default: '100%'
```

#### className:

`className` is a `string` for the outermost container class name.

```js
className: PropTypes.string, // default: ''
```

#### cropperOptions:

`cropperOptions` is an `object` for customizing the cropper component. Lists of available options can be found here: https://github.com/roadmanfong/react-cropper
```js
cropperOptions: PropTypes.object, // default: {guides: true, viewMode: 0, autoCropArea: 1}
```

#### maxFileSize:

`maxFileSize` is a maximum `number` (in bytes) for file upload validation.
```js
maxFileSize: PropTypes.object, // default: 3145728
```

#### allowedFileTypes:

`allowedFileTypes` is an `array` (of strings) of valid MIME types for file upload validation.
```js
allowedFileTypes: PropTypes.array, // default: ['image/jpeg', 'image/jpg', 'image/png']
```

### Stylus Variables
react-geosuggest comes with a set of stylus variables that can be overridden to add your own project-specific theming, as shown below:

```styl
/* Theming by overriding default stylus variables with your projects colors */

$react-geosuggest--border-color = #b1c1c5;
$react-geosuggest--box-shadow = 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

@import '@synapsestudios.com/react-geosuggest/css/react-geosuggest.styl';
```

## Contributing

To run the project on your own computer:
* Clone this repository
* `yarn install` or `npm install`
* `yarn run storybook` or `npm run storybook`
* Visit http://localhost:5000/
* Changes made to files in the `src` directory should immediately compile and be visible in your browser.
