import React from 'react';
import {
  shallow,
  ShallowWrapper,
} from 'enzyme';

import CellView, { cellSide } from '../index';
import { Cell } from '../CellView.styled';
import { CellViewProps } from '../CellView.types';

const renderComponent = (): ShallowWrapper<CellViewProps> => shallow(
  <CellView
    position={{
      x: 0,
      y: 0,
    }}
  />
);


describe('<CellView />', () => {
  describe('sides properties', () => {
    it('should return an empty value if there are no walls', () => {
      const component = renderComponent();

      expect(component.children().exists()).toBeFalsy();
    });

    it('it should have the number of children equal to the length of the array', () => {
      const sides = [cellSide.FRONT];
      const component = renderComponent();

      component.setProps({ sides });
      expect(component.find(Cell).exists).toBeTruthy();
      expect(component.find(Cell).children()).toHaveLength(sides.length);
    });

    it('it should have children with the correct property of side', () => {
      const sides = [
        cellSide.FRONT,
        cellSide.BACK,
        cellSide.BOTTOM,
      ];
      const component = renderComponent();

      component.setProps({ sides });
      expect(component.find(Cell).childAt(0).props().side).toBe(cellSide.FRONT);
      expect(component.find(Cell).childAt(1).props().side).toBe(cellSide.BACK);
      expect(component.find(Cell).childAt(2).props().side).toBe(cellSide.BOTTOM);
    });
  });

  describe('position property', () => {
    it('should have a cell component with the correct position property', () => {
      const sides = [cellSide.FRONT];
      const position = { x: 3, y: 2 };
      const component = renderComponent();

      component.setProps({ sides });
      expect(component.find(Cell).props().position.x).toEqual(0);
      expect(component.find(Cell).props().position.y).toEqual(0);

      component.setProps({ position });
      expect(component.find(Cell).props().position.x).toEqual(3);
      expect(component.find(Cell).props().position.y).toEqual(2);
    });
  });
});
