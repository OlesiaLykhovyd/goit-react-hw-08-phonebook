import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 0 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  &:hover {
    color: skyblue;
  }
  &.active {
    color: skyblue;
  }
`;
