import React, { memo } from 'react';
import Content from '../Content';
import { StoryProps } from './Story.types';

const Story: React.FC<StoryProps> = memo(({ stories }) => {
  const [currentWidget] = stories;
  const [currentUseCase] = currentWidget?.useCase;

  return (
    <Content
      widget={ currentWidget }
      useCase={ currentUseCase }
    />
  );
});

export default Story;
