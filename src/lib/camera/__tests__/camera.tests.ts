import {
  getCameraStand,
  getCameraTurn,
} from '../index';
import { direction } from 'constants/directions';
import { cells } from '../__mocks__/map.template.json';
import {
  cameraStandToNorth,
  cameraStandToEast,
  cameraStandToSouth,
  cameraStandToWest,
  cameraNorthToEast,
  cameraNorthToWest,
  cameraSouthToEast,
  cameraSouthToWest,
  cameraEastToNorth,
  cameraEastToSouth,
  cameraWestToNorth,
  cameraWestToSouth,
} from '../__mocks__/cellsInCamera';
import {
  CameraCells,
  Cell,
} from '../camera.types';

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

  describe('rotated camera', () => {
    it('should return the correct map cells for the camera, turned from north to east', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: direction.NORTH,
        to: direction.EAST,
      }, cameraStandToNorth as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraNorthToEast);
    });

    it('should return the correct map cells for the camera, turned from north to east', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: direction.NORTH,
        to: direction.WEST,
      }, cameraStandToNorth as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraNorthToWest);
    });

    it('should return the correct map cells for the camera, turned from south to east', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: direction.SOUTH,
        to: direction.EAST,
      }, cameraStandToSouth as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraSouthToEast);
    });

    it('should return the correct map cells for the camera, turned from south to west', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: direction.SOUTH,
        to: direction.WEST,
      }, cameraStandToSouth as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraSouthToWest);
    });

    it('should return the correct map cells for the camera, turned from east to north', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: direction.EAST,
        to: direction.NORTH,
      }, cameraStandToEast as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraEastToNorth);
    });

    it('should return the correct map cells for the camera, turned from east to south', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: direction.EAST,
        to: direction.SOUTH,
      }, cameraStandToEast as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraEastToSouth);
    });

    it('should return the correct map cells for the camera, turned from west to north', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: direction.WEST,
        to: direction.NORTH,
      }, cameraStandToWest as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraWestToNorth);
    });

    it('should return the correct map cells for the camera, turned from west to south', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: direction.WEST,
        to: direction.SOUTH,
      }, cameraStandToWest as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraWestToSouth);
    });
  });
});
