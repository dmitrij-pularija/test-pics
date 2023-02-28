import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  font-size: 32px;
  color: #4a4e7d;

  &:hover,
  &:focus {
    color: #4a4e7d;
  }

  &.active {
    color: #4a4e7d;
  }
`;

export const BlueText = styled.span`
  color: #3575f5;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #4a4e7d;
  padding: 10px 10px 5px 10px;
`;

export const OutletBox = styled.div`
  width: 100%;
  height: calc(100% - 45px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;