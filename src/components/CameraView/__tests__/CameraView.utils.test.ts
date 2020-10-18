import { getTurnAnimation } from '../CameraView.utils';
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

describe('Utils:CameraView', () => {
  describe('getTurnAnimation', () => {
    it('should return the correct rotation property for the camera', () => {
      expect(getTurnAnimation({ from: direction.NORTH, to: direction.EAST })).toEqual(turnNorthToEast);
      expect(getTurnAnimation({ from: direction.EAST, to: direction.SOUTH })).toEqual(turnEastToSouth);
      expect(getTurnAnimation({ from: direction.SOUTH, to: direction.WEST })).toEqual(turnSouthToWest);
      expect(getTurnAnimation({ from: direction.WEST, to: direction.NORTH })).toEqual(turnWestToNorth);
      
      expect(getTurnAnimation({ from: direction.NORTH, to: direction.WEST })).toEqual(turnNorthToWest);
      expect(getTurnAnimation({ from: direction.WEST, to: direction.SOUTH })).toEqual(turnWestToSouth);
      expect(getTurnAnimation({ from: direction.SOUTH, to: direction.EAST })).toEqual(turnSouthToEast);
      expect(getTurnAnimation({ from: direction.EAST, to: direction.NORTH })).toEqual(turnEastToNorth);

      expect(getTurnAnimation({ from: direction.NORTH, to: direction.NORTH })).toEqual(empty);
    });
  });
});
