import React from 'react';
import styled from 'styled-components';
import { CameraProps } from './CameraView.types';

export const Camera: React.FC<CameraProps> = styled.div<CameraProps>`
  transform-style: preserve-3d;
  transform:
    rotate3d(0, 1, 0, ${({ direction }): number => direction * 90}deg)
    translate3d(${({ theme }): number => theme.translateX}rem, 0, 0);
`;
