import React from 'react';
import {
  Cube,
  CubeFaceBack,
  CubeFaceBottom,
  CubeFaceFront,
  CubeFaceLeft,
  CubeFaceRight,
  CubeFaceTop,
  Scene,
} from './App.styled';

const App: React.FC = () => (
  <Scene>
    <Cube>
      <CubeFaceFront>front</CubeFaceFront>
      <CubeFaceBack>back</CubeFaceBack>
      <CubeFaceRight>right</CubeFaceRight>
      <CubeFaceLeft>left</CubeFaceLeft>
      <CubeFaceTop>top</CubeFaceTop>
      <CubeFaceBottom>bottom</CubeFaceBottom>
    </Cube>
  </Scene>
);

export default App;
