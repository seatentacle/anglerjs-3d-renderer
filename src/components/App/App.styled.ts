import React from 'react';
import styled from 'styled-components';

export const Scene: React.FC = styled.div`
  width: ${({ theme }): number => theme.width}rem;
  height: ${({ theme }): number => theme.height}rem;
  perspective: 20rem;
  perspective-origin: 50% 33.333%;

  transform-style: preserve-3d;
  overflow: hidden;

  background-color: #000000;
`;

export const Map: React.FC = styled.div`
  width: ${({ theme }): number => theme.width}rem;
  height: ${({ theme }): number => theme.height}rem;
  perspective: 40rem;

  transform-style: inherit;
  transform: translate3d(0, 0, 13.75rem);
`;

export const Camera: React.FC = styled.div`
  transform-style: inherit;
  transform: translateX(${({ theme }): number => theme.translateX}rem);
`;
