import { direction } from 'constants/directions';
import { Position } from 'components/CellView';
import { Cell } from 'lib/camera';

export type CameraProps = {
  direction: direction;
};

export type CameraViewProps = {
  position: Position;
  cells: Array<Cell>;
  direction?: direction;
};
