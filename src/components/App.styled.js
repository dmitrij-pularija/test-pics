import styled from 'styled-components';

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px auto 0 auto;

  // @media screen and (min-width: 380px) {
  //   width: 80%;
  // }

  // @media screen and (min-width: 480px) {
  //   width: 50%;
  // }
`;

export const Icon = styled.img`
  pointer-events: none;
  margin-right: 5px;
`;

export const Title = styled.h1`
  width: 100%;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f303a;
  font-size: 32px;
`;

export const Blue = styled.span`
  color: #3575f5;
`;
