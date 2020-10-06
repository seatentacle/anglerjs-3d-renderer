import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { Container } from './Widget.styled';
import { WidgetProps } from './Widget.types';

const Widget: React.FC<WidgetProps> = ({
  widget,
  useCase,
}) => {
  const {
    Component,
    Decorator,
    decoratorProps,
  } = widget;
  const {
    paths,
    props,
  } = useCase;

  return (
    <BrowserRouter>
      <Container>
        <Navigation paths={ paths }/>
        {
          Decorator
            ? (
              <Decorator { ...decoratorProps }>
                <Component { ...props } />
              </Decorator>
            )
            : <Component { ...props } />
        }
      </Container>
    </BrowserRouter>
  );
};

export default Widget;
