import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SetStateExample from './SetStateExample';
import '../../styles/index.css';

storiesOf('<GooglePlaces />', module).add('setState Example (default)', () => (
  <div>
    <style>
      {
        `html {
        box-sizing: border-box;
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }`
      }
    </style>
    <SetStateExample />
  </div>
));
