import styled from 'styled-components';

export const Message = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  font-size: 24px;
  color: red;
  padding-top: 15px;

  @media screen and (min-width: 480px) {
    height: 315px;
    padding: 0;
  }
`;
