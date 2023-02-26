import styled from 'styled-components';

export const Cont = styled.div`
height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin: 0 auto;
  padding: 15px;

  // @media screen and (min-width: 480px) {
  //   max-width: 500px;
  // }
`;

export const Card = styled.div`
  display: block;
  // overflow-y: auto;
  // overflow-x: hidden;
  // margin-top: 80px;
  border-radius: 5px;
 
  padding: 15px;

  @media screen and (min-width: 530px) {
      height: 500px;
      width: 400px;
  border-radius: 10px;

    }
  @media screen and (min-width: 768px) {
    // padding: 30px 20px;
    padding: 20px;
  }
  background-color: #f5f4fa;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;