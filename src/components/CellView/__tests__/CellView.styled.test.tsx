import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import {
  Cell,
  CellFace,
} from '../CellView.styled';
import { cellSide } from '../index';

const defaultTheme = {
  width: 25,
  height: 12.5,
  translateX: 6.25,
  translateZ: 6.25,
};

describe('Styled:CellView', () => {
  it('should have the correct transform styles for the x and y position props', () => {
    const component = shallow(
      <Cell
        position={{ x: 0, y: 0 }}
        /* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */
        // @ts-ignore
        theme={ defaultTheme }
      />
    );

    expect(component).toHaveStyleRule('transform', 'translate3d(-37.5rem,0,-37.5rem)');

    component.setProps({ position: { x: 3, y: 2 } });
    expect(component).toHaveStyleRule('transform', 'translate3d(0rem,0,-12.5rem)');
  });

  it('should have the correct styles for the side properties', () => {
    const component = shallow(
      <CellFace
        side={ cellSide.FRONT }
        /* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */
        // @ts-ignore
        theme={ defaultTheme }
      />
    );

    expect(component).toHaveStyleRule('height', '7.5rem');
    expect(component).toHaveStyleRule(
      'transform',
      'rotate3d(0,0,0,0) translate3d(0,0,6.25rem) scale3d(1,1,1)',
    );
    expect(component).toHaveStyleRule('background-color', 'hsla(0,100%,50%,0.5)');

    component.setProps({ side: cellSide.BOTTOM });
    expect(component).toHaveStyleRule('height', '12.5rem');
    expect(component).toHaveStyleRule(
      'transform',
      'rotate3d(-1,0,0,90deg) translate3d(0,0,1.25rem) scale3d(1,-1,1)',
    );
    expect(component).toHaveStyleRule('background-color', 'hsla(300,100%,50%,0.5)');
  });
});
