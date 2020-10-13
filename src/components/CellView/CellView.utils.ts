import {
  cellSide,
  GetBackground,
  GetHeight,
  GetTransform,
  GetTranslate,
} from './CellView.types';

export const getBackground: GetBackground = side => {
  switch (side) {
    case cellSide.FRONT:
      return 'hsla(0, 100%, 50%, 0.5)';
    case cellSide.BACK:
      return 'hsla(120, 100%, 50%, 0.5)';
    case cellSide.RIGHT:
      return 'hsla(60, 100%, 50%, 0.5)';
    case cellSide.LEFT:
      return 'hsla(180, 100%, 50%, 0.5)';
    case cellSide.TOP:
      return 'hsla(240, 100%, 50%, 0.5)';
    case cellSide.BOTTOM:
      return 'hsla(300, 100%, 50%, 0.5)';
    default:
      return 'transparent';
  }
};

export const getHeight: GetHeight = (side, height) =>
  side === cellSide.TOP ||
  side === cellSide.BOTTOM
    ? height
    : height / 1.666;

export const getTransform: GetTransform = (side, translateZ, height) => {
  switch (side) {
    case cellSide.BACK:
      return `rotate3d(0, 1, 0, 180deg) translate3d(0, 0, ${translateZ}rem) scale3d(-1, 1, 1)`;
    case cellSide.RIGHT:
      return `rotate3d(0, 1, 0, 90deg) translate3d(0, 0, ${translateZ}rem) scale3d(-1, 1, 1)`;
    case cellSide.LEFT:
      return `rotate3d(0, -1, 0, 90deg) translate3d(0, 0, ${translateZ}rem) scale3d(-1, 1, 1)`;
    case cellSide.TOP:
       return `rotate3d(1, 0, 0, 90deg) translate3d(0, 0, ${translateZ}rem) scale3d(1, -1, 1)`;
    case cellSide.BOTTOM:
      return `rotate3d(-1, 0, 0, 90deg) translate3d(0, 0, ${height / 10}rem) scale3d(1, -1, 1)`;
    case cellSide.FRONT:
    default:
      return `rotate3d(0, 0, 0, 0) translate3d(0, 0, ${translateZ}rem) scale3d(1, 1, 1)`;
  }
};

export const getTranslate: GetTranslate = ({ x, y }, height) => {
  const dx = (-height * 3) + (height * x);
  const dz = (-height * 3) + (height * y);

  return `translate3d(${dx}rem, 0, ${dz}rem)`;
};
