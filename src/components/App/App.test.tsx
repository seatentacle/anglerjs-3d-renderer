import React from 'react';
import {
  shallow,
  ShallowWrapper,
} from 'enzyme';
import App from './App';
import { Cube } from './App.styled';

const renderComponent = (): ShallowWrapper<{ className: string }> => shallow(<App />);

it('should have the correct side count', () => {
  const component = renderComponent();

  expect(component.find(Cube).children().length).toBe(6);
});
