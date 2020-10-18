import {
  empty,
  turnEastToNorth,
  turnEastToSouth,
  turnNorthToEast,
  turnNorthToWest,
  turnSouthToEast,
  turnSouthToWest,
  turnWestToNorth,
  turnWestToSouth,
} from 'animations/camera';
import { direction } from 'constants/directions';
import { GetTurnAnimation } from './CameraView.types';

export const getTurnAnimation: GetTurnAnimation = ({ from, to }) => {
  switch (true) {
    case from === direction.NORTH && to === direction.EAST:
      return turnNorthToEast;
    case from === direction.EAST && to === direction.SOUTH:
      return turnEastToSouth;
    case from === direction.SOUTH && to === direction.WEST:
      return turnSouthToWest;
    case from === direction.WEST && to === direction.NORTH:
      return turnWestToNorth;
    case from === direction.NORTH && to === direction.WEST:
      return turnNorthToWest;
    case from === direction.WEST && to === direction.SOUTH:
      return turnWestToSouth;
    case from === direction.SOUTH && to === direction.EAST:
      return turnSouthToEast;
    case from === direction.EAST && to === direction.NORTH:
      return turnEastToNorth;
    default:
      return empty;
  }
};
