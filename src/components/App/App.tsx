import React from 'react';
import { ThemeProvider } from 'styled-components';
import CameraView from '../CameraView';
import { cells } from 'lib/camera/__mocks__/map.template.json';
import { Cell } from 'lib/camera';

import {
  Map,
  Scene,
} from './App.styled';
import {
  WIDTH,
  HEIGHT,
  TRANSLATE_X,
  TRANSLATE_Z,
} from 'constants/dimensions';

const defaultTheme = {
  width: WIDTH,
  height: HEIGHT,
  translateX: TRANSLATE_X,
  translateZ: TRANSLATE_Z,
};

const App: React.FC = () => (
  <ThemeProvider theme={ defaultTheme }>
    <Scene>
      <Map>
        <CameraView
          position={{ x: 3, y: 3 }}
          direction={ 2 }
          cells={ cells as Array<Cell> }
        />
      </Map>
    </Scene>
  </ThemeProvider>
);

export default App;
