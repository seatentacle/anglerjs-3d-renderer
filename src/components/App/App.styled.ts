import React from 'react';
import styled from 'styled-components';

const WIDTH = 200;
const HEIGHT = 200;

export const Scene: React.FC = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  border: 1px solid #ccc;
  perspective: 600px;
`;

export const Cube: React.FC = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
`;

const CubeFace: React.FC = styled.div`
  position: absolute;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  border: 2px solid black;
  line-height: ${HEIGHT}px;
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`;

export const CubeFaceFront: React.FC = styled(CubeFace)`
  background-color: hsla(0, 100%, 50%, 0.5);
  transform: rotateY(0deg) translateZ(100px);
`;

export const CubeFaceBack: React.FC = styled(CubeFace)`
  background-color: hsla(120, 100%, 50%, 0.5);
  transform: rotateY(180deg) translateZ(100px);
`;

export const CubeFaceRight: React.FC = styled(CubeFace)`
  background-color: hsla(60, 100%, 50%, 0.5);
  transform: rotateY(90deg) translateZ(100px);
`;

export const CubeFaceLeft: React.FC = styled(CubeFace)`
  background: hsla(180, 100%, 50%, 0.7);
  transform: rotateY(-90deg) translateZ(100px);
`;

export const CubeFaceTop: React.FC = styled(CubeFace)`
  background: hsla(240, 100%, 50%, 0.5);
  transform: rotateX(90deg) translateZ(100px);
`;

export const CubeFaceBottom: React.FC = styled(CubeFace)`
  background: hsla(300, 100%, 50%, 0.5);
  transform: rotateX(-90deg) translateZ(100px);
`;
