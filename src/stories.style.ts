import React from 'react';
import styled from 'styled-components';

export const Controls: React.FC = styled.div`
  margin-top: 24px;
`;

export const Field: React.FC = styled.div`
  & + & {
    margin-top: 12px;
  }
`;
