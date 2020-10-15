import { direction } from 'constants/directions';
import {
  cellSide,
  CellViewProps,
  Position,
} from 'components/CellView';

export type CameraCells = Array<CellViewProps>;

export type Cell = Position & {
  sides: Array<cellSide>;
};

export type GetCameraStand = (
  direction: direction,
  position: Position,
  cells: Array<Cell>,
) => CameraCells;
