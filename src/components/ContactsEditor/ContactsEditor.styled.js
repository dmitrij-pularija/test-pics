import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #757575;
  padding: 80px 15px 15px 15px;


  @media screen and (min-width: 380px) {
    width: 300px;
  border-radius: 10px;

  }

  @media screen and (min-width: 530px) {
    height: 500px;
    width: 400px;
    // padding: 50px;
  }
`;

export const List = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
`;