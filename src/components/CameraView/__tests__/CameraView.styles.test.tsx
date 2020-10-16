import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { Camera } from '../CameraView.styled';
import { direction } from 'constants/directions';

const defaultTheme = {
  width: 25,
  height: 12.5,
  translateX: 6.25,
  translateZ: 6.25,
};

describe('Styled:CellView', () => {
  it('should have the correct transform styles for the direction property', () => {
    const component = shallow(
      <Camera
        direction={ direction.NORTH }
        /* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */
        // @ts-ignore
        theme={ defaultTheme }
      />
    );

    expect(component).toHaveStyleRule('transform', 'rotate3d(0,1,0,0deg) translate3d(6.25rem,0,0)');

    component.setProps({ direction: direction.SOUTH });
    expect(component).toHaveStyleRule('transform', 'rotate3d(0,1,0,180deg) translate3d(6.25rem,0,0)');
  });
});
