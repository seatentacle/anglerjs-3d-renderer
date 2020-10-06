import React from 'react';
import styled from 'styled-components';
import {
  NavLink,
  NavLinkProps,
} from 'react-router-dom';

export const Container: React.FC = styled.div`
  margin: 0 0 12px;
`;

export const StyledNavLink: React.FC<NavLinkProps> = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #2aa1d3;

  & + & {
    margin-left: 12px;
  }

  &.active {
    color: hsla(0, 0%, 100%, 0.4);
  }
`;
