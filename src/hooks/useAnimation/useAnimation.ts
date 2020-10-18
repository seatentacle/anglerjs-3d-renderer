import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  AnimationStatus,
  UseAnimation,
} from './useAnimation.types';

const useAnimation: UseAnimation = animationName => {
  const [animationStatus, setAnimationStatus] = useState<AnimationStatus>('end');

  const onAnimationEnd = useCallback((e: React.AnimationEvent) => {
    if (animationName === e.animationName) {
      setAnimationStatus('end');
    }
  }, [animationStatus, animationName]);

  useEffect(() => {
    setAnimationStatus('start');
  }, [animationName]);

  return [animationStatus, onAnimationEnd];
};

export default useAnimation;
