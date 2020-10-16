import React, { useState } from 'react';
import App from './index';
import {
  Controls,
  Field,
} from './stories.style';
import { cells } from 'lib/camera/__mocks__/map.template.json';
import { direction as cameraDirection } from 'constants/directions';
import defaultTheme from './theme';
import { Cell } from 'lib/camera';

const WrappedWidget: React.FC = () => {
  const [position, setPosition] = useState({ x: 3, y: 3 });
  const [direction, setDirection] = useState(2);

  const changeX = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPosition({ ...position, x: Number(e.target.value) });
  };
  const changeY = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPosition({ ...position, y: Number(e.target.value) });
  };
  const changeDirection = (direction: number) => (): void => {
    setDirection(direction);
  };

  return (
    <>
      <App
        position={ position }
        direction={ direction }
        map={{ cells: cells as Array<Cell> }}
        theme={ defaultTheme }
      />

      <Controls>
        <Field>
          x: <input
            value={ position.x }
            type={ 'number' }
            onChange={ changeX }
          />
        </Field>
        <Field>
          y: <input
            value={ position.y }
            type={ 'number' }
            onChange={ changeY }
          />
        </Field>
        <Field>
          <div>direction:</div>
          <button onClick={ changeDirection(cameraDirection.NORTH) }>north</button>
          <button onClick={ changeDirection(cameraDirection.EAST) }>east</button>
          <button onClick={ changeDirection(cameraDirection.SOUTH) }>south</button>
          <button onClick={ changeDirection(cameraDirection.WEST) }>west</button>
        </Field>
      </Controls>
    </>
  );
};

const widgets = [{
  title: 'Hello, Angler.js!',
  Component: WrappedWidget,
  useCase: [{
    title: '3d Renderer',
    description: 'React-based renderer for 3d dungeon',
  }],
}];

export default widgets;
