import { keyframes } from 'styled-components';
import { GetCameraAnimation } from './camera.types';

export const empty: GetCameraAnimation = () => keyframes``;

export const turnNorthToEast: GetCameraAnimation = ({ translateX }) => keyframes`
  from {
    transform: rotate3d(0, 1, 0, 0) translate3d(${translateX}rem, 0, 0);
  }
  to {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${translateX}rem, 0, 0);
  }
`;

export const turnEastToSouth: GetCameraAnimation = ({ translateX }) => keyframes`
  from {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${translateX}rem, 0, 0);
  }
  to {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${translateX}rem, 0, 0);
  }
`;

export const turnSouthToWest: GetCameraAnimation = ({ translateX }) => keyframes`
  from {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${translateX}rem, 0, 0);
  }
  to {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${translateX}rem, 0, 0);
  }
`;

export const turnWestToNorth: GetCameraAnimation = ({ translateX }) => keyframes`
  from {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${translateX}rem, 0, 0);
  }
  to {
    transform: rotate3d(0, 1, 0, 360deg) translate3d(${translateX}rem, 0, 0);
  }
`;

export const turnNorthToWest: GetCameraAnimation = ({ translateX }) => keyframes`
  from {
    transform: rotate3d(0, 1, 0, 360deg) translate3d(${translateX}rem, 0, 0);
  }
  to {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${translateX}rem, 0, 0);
  }
`;

export const turnWestToSouth: GetCameraAnimation = ({ translateX }) => keyframes`
  from {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${translateX}rem, 0, 0);
  }
  to {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${translateX}rem, 0, 0);
  }
`;

export const turnSouthToEast: GetCameraAnimation = ({ translateX }) => keyframes`
  from {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${translateX}rem, 0, 0);
  }
  to {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${translateX}rem, 0, 0);
  }
`;

export const turnEastToNorth: GetCameraAnimation = ({ translateX }) => keyframes`
  from {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${translateX}rem, 0, 0);
  }
  to {
    transform: rotate3d(0, 1, 0, 0deg) translate3d(${translateX}rem, 0, 0);
  }
`;
