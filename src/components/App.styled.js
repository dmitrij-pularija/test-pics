import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 20px 0;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
`;

export const Icon = styled.img`
  pointer-events: none;
  margin-right: 5px;
  // fill: ${props => props.fill};
`;

export const Title = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

export const Blue = styled.span`
  color: #3575f5;
`;
