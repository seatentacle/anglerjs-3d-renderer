import React, { memo } from 'react';
import {
  Container,
  StyledNavLink,
} from './Navigation.styled';
import { NavigationProps } from './Navigation.types';

const Navigation: React.FC<NavigationProps> = ({ paths = [] }) => paths.length > 0
  ? (
    <Container>
      {
        paths.map((item, index) => (
          <StyledNavLink
            key={ `navLink-${index}` }
            to={ item }
          >
            { item }
          </StyledNavLink>
        ))
      }
    </Container>
  )
  : <></>;

export default memo(Navigation);
