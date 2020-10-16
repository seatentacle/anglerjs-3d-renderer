import {
  WIDTH,
  HEIGHT,
  TRANSLATE_X,
  TRANSLATE_Z,
} from 'constants/dimensions';

const theme = {
  width: WIDTH,
  height: HEIGHT,
  translateX: TRANSLATE_X,
  translateZ: TRANSLATE_Z,
};

export default theme;

export type Theme = typeof theme;
