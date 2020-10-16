import React from 'react';
import CellView, { CellViewProps } from '../CellView';
import { Camera } from './CameraView.styled';
import { getCameraStand } from 'lib/camera';
import { direction as cameraDirection } from 'constants/directions';
import { CameraViewProps } from './CameraView.types';

const CameraView: React.FC<CameraViewProps> = ({
  position,
  cells,
  direction = cameraDirection.NORTH,
}) => {
  const cameraCells: Array<CellViewProps> = getCameraStand(direction, position, cells);

  return (
    <Camera direction={ direction }>
      {
        cameraCells.map((props, index) => (
          <CellView
            key={ index }
            { ...props }
          />
        ))
      }
    </Camera>
  );
};

export default CameraView;
