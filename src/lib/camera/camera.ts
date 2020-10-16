import { direction } from 'constants/directions';
import {
  CameraCells,
  Cell,
  GetCameraStand,
} from './camera.types';

const CAMERA_POSITION = 3;

export const getCameraStand: GetCameraStand = (cameraDirection, position, cells) => {
  const cellsInCamera: CameraCells = [];

  for (let row = 0; row <= CAMERA_POSITION; row++) {
    const columnsLimit = row > 1 ? row : 1;
    const dxSigned =
      cameraDirection === direction.SOUTH ||
      cameraDirection === direction.WEST
        ? -row : row;

    for (let column = -columnsLimit; column <= columnsLimit; column++) {
      let dx = column;
      let dy = dxSigned;

      if (cameraDirection === direction.EAST || cameraDirection === direction.WEST) {
        dx = dxSigned;
        dy = column;
      }

      const cell: Cell | undefined = cells.find(({ x, y }) =>
        x === position.x + dx &&
        y === position.y - dy
      );

      if (cell) {
        cellsInCamera.push({
          position: {
            x: CAMERA_POSITION + dx,
            y: CAMERA_POSITION - dy,
          },
          sides: cell.sides,
        });
      }
    }
  }

  return cellsInCamera;
};
