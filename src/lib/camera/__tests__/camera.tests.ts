import { getCameraStand } from '../index';
import { direction } from 'constants/directions';
import { cells } from '../__mocks__/map.template.json';
import {
  cameraStandToNorth,
  cameraStandToEast,
  cameraStandToSouth,
  cameraStandToWest,
} from '../__mocks__/cellsInCamera';
import { Cell } from '../camera.types';

describe('Lib:camera', () => {
  describe('static camera', () => {
    it('should return the correct map cells for the camera facing north', () => {
      const camera = getCameraStand(direction.NORTH, { x: 3, y: 3 }, cells as Array<Cell>);

      expect(camera).toEqual(cameraStandToNorth);
    });

    it('should return the correct map cells for the camera facing east', () => {
      const camera = getCameraStand(direction.EAST, { x: 3, y: 3 }, cells as Array<Cell>);

      expect(camera).toEqual(cameraStandToEast);
    });

    it('should return the correct map cells for the camera facing south', () => {
      const camera = getCameraStand(direction.SOUTH, { x: 3, y: 3 }, cells as Array<Cell>);

      expect(camera).toEqual(cameraStandToSouth);
    });

    it('should return the correct map cells for the camera facing west', () => {
      const camera = getCameraStand(direction.WEST, { x: 3, y: 3 }, cells as Array<Cell>);

      expect(camera).toEqual(cameraStandToWest);
    });
  });
});
