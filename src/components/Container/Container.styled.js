import styled from 'styled-components';

export const Cont = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 15px;

  @media screen and (min-width: 480px) {
    max-width: 500px;
  }
`;

export const Card = styled.div`
  display: block;
  margin-top: 80px;
  border-radius: 10px;
  padding: 15px;
  @media screen and (min-width: 768px) {
    padding: 30px 20px;
  }
  background-color: #f5f4fa;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Logo = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 15px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
`;

export const Icon = styled.img`
height: 50px;
pointer-events: none;
animation: App-logo-spin infinite 20s linear;
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;