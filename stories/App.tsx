import React, { memo } from 'react';
import Story from './components/Story';
import stories from '../src/stories';

const App = () => <Story stories={ stories } />;

export default memo(App);
