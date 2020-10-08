import React from 'react';
import {
  shallow,
  ShallowWrapper,
} from 'enzyme';
import App from './App';

const renderComponent = (): ShallowWrapper<{ className: string }> => shallow(<App />);

it('should have thr correct class', () => {
  const component = renderComponent();

  expect(component.props().className).toBe('app');
});
