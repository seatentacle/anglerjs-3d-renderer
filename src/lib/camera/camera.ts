import { direction } from 'constants/directions';
import {
  CameraCells,
  Cell,
  GetCameraStand,
  GetCameraTurn,
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

export const getCameraTurn: GetCameraTurn = (turnPosition, cameraStand, cells) => {
  const cellsInCamera: CameraCells = [];

  for (let row = 0; row <= CAMERA_POSITION; row++) {
    let columnsLimit;
    let columnsStart;

    if (turnPosition.from === direction.SOUTH || turnPosition.from === direction.EAST) {
      columnsLimit = row > 1 ? row - 1 : -1;
      columnsStart = row > 1 ? -row : -1;
    } else {
      columnsLimit = row > 1 ? row : 1;
      columnsStart = row > 1 ? -row + 1 : 1;
    }

    for (let column = columnsStart; column <= columnsLimit; column++) {
      let dx = column;
      let dy = row;

      if (turnPosition.to === direction.EAST || turnPosition.to === direction.WEST) {
        dx = row;
        dy = column;
      }

      const dxSigned = turnPosition.to === direction.WEST ? -dx : dx;
      const dySigned = turnPosition.to === direction.NORTH ? -dy : dy;

      const cell: Cell | undefined = cells.find(
        ({ x, y }) => x === turnPosition.x + dxSigned && y === turnPosition.y + dySigned
      );

      if (cell) {
        cellsInCamera.push({
          position: {
            x: CAMERA_POSITION + dxSigned,
            y: CAMERA_POSITION + dySigned,
          },
          sides: cell.sides,
        });
      }
    }
  }

  return [
    ...cameraStand,
    ...cellsInCamera,
  ];
};
