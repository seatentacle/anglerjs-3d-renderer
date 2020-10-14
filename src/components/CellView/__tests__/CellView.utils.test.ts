import {
  getBackground,
  getHeight,
  getTransform,
  getTranslate,
} from '../CellView.utils';
import { cellSide } from '../CellView.types';

describe('Utils:CellView', () => {
  describe('getBackground', () => {
    it('should return the correct background color for a particular side', () => {
      expect(getBackground(cellSide.FRONT)).toBe('hsla(0, 100%, 50%, 0.5)');
      expect(getBackground(cellSide.BACK)).toBe('hsla(120, 100%, 50%, 0.5)');
      expect(getBackground(cellSide.RIGHT)).toBe('hsla(60, 100%, 50%, 0.5)');
      expect(getBackground(cellSide.LEFT)).toBe('hsla(180, 100%, 50%, 0.5)');
      expect(getBackground(cellSide.TOP)).toBe('hsla(240, 100%, 50%, 0.5)');
      expect(getBackground(cellSide.BOTTOM)).toBe('hsla(300, 100%, 50%, 0.5)');

      /* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */
      // @ts-ignore
      expect(getBackground(null)).toBe('transparent');
    });
  });

  describe('getHeight', () => {
    it('should return the correct height for a particular side', () => {
      expect(getHeight(cellSide.FRONT, 12.5)).toBe(7.5);
      expect(getHeight(cellSide.BACK, 12.5)).toBe(7.5);
      expect(getHeight(cellSide.RIGHT, 12.5)).toBe(7.5);
      expect(getHeight(cellSide.LEFT, 12.5)).toBe(7.5);

      expect(getHeight(cellSide.TOP, 12.5)).toBe(12.5);
      expect(getHeight(cellSide.BOTTOM, 12.5)).toBe(12.5);
    });
  });

  describe('getTransform', () => {
    it('should return the correct transform for a particular side', () => {
      expect(getTransform(cellSide.FRONT, 6.25, 12.5))
        .toBe('rotate3d(0, 0, 0, 0) translate3d(0, 0, 6.25rem) scale3d(1, 1, 1)');
      expect(getTransform(cellSide.BACK, 6.25, 12.5))
        .toBe('rotate3d(0, 1, 0, 180deg) translate3d(0, 0, 6.25rem) scale3d(-1, 1, 1)');
      expect(getTransform(cellSide.RIGHT, 6.25, 12.5))
        .toBe('rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 6.25rem) scale3d(-1, 1, 1)');
      expect(getTransform(cellSide.LEFT, 6.25, 12.5))
        .toBe('rotate3d(0, -1, 0, 90deg) translate3d(0, 0, 6.25rem) scale3d(-1, 1, 1)');
      expect(getTransform(cellSide.TOP, 6.25, 12.5))
        .toBe('rotate3d(1, 0, 0, 90deg) translate3d(0, 0, 6.25rem) scale3d(1, -1, 1)');
      expect(getTransform(cellSide.BOTTOM, 6.25, 12.5))
        .toBe('rotate3d(-1, 0, 0, 90deg) translate3d(0, 0, 1.25rem) scale3d(1, -1, 1)');

      /* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */
      // @ts-ignore
      expect(getTransform(null, 6.25, 12.5))
        .toBe(`rotate3d(0, 0, 0, 0) translate3d(0, 0, 6.25rem) scale3d(1, 1, 1)`);
    });
  });

  describe('getTranslate', () => {
    it('should return the correct translate property for the cell', () => {
      expect(getTranslate({ x: 3, y: 3 }, 12.5)).toBe('translate3d(0rem, 0, 0rem)');
      expect(getTranslate({ x: 2, y: 1 }, 12.5)).toBe('translate3d(-12.5rem, 0, -25rem)');
      expect(getTranslate({ x: 4, y: -1 }, 12.5)).toBe('translate3d(12.5rem, 0, -50rem)');
    });
  });
});
