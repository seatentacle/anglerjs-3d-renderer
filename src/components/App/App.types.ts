import { Theme } from '../../theme';
import { Position } from 'components/CellView';
import { direction } from 'constants/directions';
import { Cell } from 'lib/camera';

export type Map = {
  cells: Array<Cell>;
};

export type AppProps = {
  theme: Theme;
  map: Map;
  direction?: direction;
  position?: Position;
};
