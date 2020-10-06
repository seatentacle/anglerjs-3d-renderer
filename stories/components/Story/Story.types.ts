import { ComponentType } from 'react';

export type Widget = {
  title: string;
  Component: ComponentType;
  useCase: Array<UseCase>;
  Decorator?: ComponentType;
  decoratorProps?: any;
};

export type UseCase = {
  title: string;
  description?: string;
  paths?: Array<string>;
  props?: any;
};

export type StoryProps = {
  stories: Array<Widget>;
};
