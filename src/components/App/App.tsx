import React from 'react';
import { ThemeProvider } from 'styled-components';
import CameraView from '../CameraView';
import { direction as cameraDirection } from 'constants/directions';
import { AppProps } from './App.types';

import {
  Map,
  Scene,
} from './App.styled';

const App: React.FC<AppProps> = ({
  map,
  theme,
  position = { x: 0, y: 0 },
  direction = cameraDirection.NORTH,
}) => (
  <ThemeProvider theme={ theme }>
    <Scene>
      <Map>
        <CameraView
          position={ position }
          direction={ direction }
          cells={ map.cells }
        />
      </Map>
    </Scene>
  </ThemeProvider>
);

export default App;
