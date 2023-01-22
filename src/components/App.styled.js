import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  padding: 15px 0;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  @media screen and (min-width: 380px) {
    width: 80%;
  }

  @media screen and (min-width: 480px) {
    width: 50%;
  }
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
  font-size: 28px;
`;

export const Blue = styled.span`
  color: #3575f5;
`;
