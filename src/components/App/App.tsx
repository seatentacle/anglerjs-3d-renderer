import React from 'react';
import { ThemeProvider } from 'styled-components';
import CellView, { cellSide } from '../CellView';

import {
  Camera,
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
        <Camera>
          <CellView
            position={{ x: 3, y: 3 }}
            sides={[
              cellSide.FRONT,
              cellSide.BACK,
              cellSide.RIGHT,
              cellSide.LEFT,
              cellSide.TOP,
              cellSide.BOTTOM,
            ]}
          />
        </Camera>
      </Map>
    </Scene>
  </ThemeProvider>
);

export default App;
