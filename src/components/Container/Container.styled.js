import styled from 'styled-components';

export const Cont = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Card = styled.div`
  display: block;
  border-radius: 5px;
  padding: 15px;
  background-color: #f5f4fa;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 530px) {
    height: 500px;
    width: 400px;
    border-radius: 10px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;