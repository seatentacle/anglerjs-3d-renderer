import React from 'react';
import {
  shallow,
  ShallowWrapper,
} from 'enzyme';
import CameraView, { CameraViewProps } from '../index';
import { Camera } from '../CameraView.styled';
import { direction } from 'constants/directions';
import { Cell } from 'lib/camera';
import { cells } from 'lib/camera/__mocks__/map.template.json';


const renderComponent = (): ShallowWrapper<CameraViewProps> => shallow(
  <CameraView
    position={{ x: 3, y: 3 }}
    cells={ cells as Array<Cell> }
  />
);

describe('<CellView />', () => {
  describe('direction and position properties', () => {
    it('should have the correct children count for given properties camera directions', () => {
      const component = renderComponent();

      expect(component.find(Camera).children()).toHaveLength(16);

      component.setProps({ direction: direction.EAST });
      expect(component.find(Camera).children()).toHaveLength(10);

      component.setProps({ direction: direction.SOUTH });
      expect(component.find(Camera).children()).toHaveLength(11);

      component.setProps({ direction: direction.WEST });
      expect(component.find(Camera).children()).toHaveLength(9);
    });

    it('should have the correct children count for given properties camera positions', () => {
      const component = renderComponent();

      expect(component.find(Camera).children()).toHaveLength(16);

      component.setProps({ position: { x: 1, y: 1 } });
      expect(component.find(Camera).children()).toHaveLength(6);

      component.setProps({ position: { x: 1, y: 0 } });
      expect(component.find(Camera).children()).toHaveLength(3);
    });
  });
});
