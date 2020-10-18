import React from 'react';

export type AnimationStatus = 'start' | 'end';

export type UseAnimationProps = {
  animationName: string;
};

export type UseAnimationState = [
  AnimationStatus,
  React.EventHandler<React.AnimationEvent>,
];

export type UseAnimation = (animationName: string) => UseAnimationState;
