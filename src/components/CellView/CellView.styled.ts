import React from 'react';
import styled from 'styled-components';
import {
  getBackground,
  getHeight,
  getTransform,
  getTranslate,
} from './CellView.utils';
import {
  CellFaceProps,
  CellProps,
} from './CellView.types';

export const Cell: React.FC<CellProps> = styled.div<CellProps>`
  width: ${({ theme }): number => theme.width / 2}rem;
  height: ${({ theme }): number => theme.height}rem;
  position: absolute;
  transform-style: preserve-3d;

  transform: ${({ position, theme }): string => getTranslate(position, theme.height)};
`;

export const CellFace: React.FC<CellFaceProps> = styled.div<CellFaceProps>`
  position: absolute;
  width: ${({ theme }): number => theme.width / 2}rem;
  height: ${({ side, theme }): number => getHeight(side, theme.height)}rem;

  transform: ${({ side, theme }): string => getTransform(side, theme.translateZ, theme.height)};
  background-color: ${({ side }): string => getBackground(side)};
`;
