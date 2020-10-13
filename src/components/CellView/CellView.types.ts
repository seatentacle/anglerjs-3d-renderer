export enum cellSide {
  FRONT = 'front',
  BACK = 'back',
  RIGHT = 'right',
  LEFT = 'left',
  TOP = 'top',
  BOTTOM = 'bottom',
}

export type Position = {
  x: number;
  y: number;
};

export type CellFaceProps = {
  side: cellSide;
};

export type CellProps = {
  position: Position;
};

export type CellViewProps = {
  position: Position;
  sides?: Array<cellSide>;
};

export type GetBackground = (side: cellSide) => string;

export type GetHeight = (side: cellSide, height: number) => number;

export type GetTransform = (
  side: cellSide,
  translateZ: number,
  height: number,
) => string;

export type GetTranslate = (position: Position, height: number) => string;
