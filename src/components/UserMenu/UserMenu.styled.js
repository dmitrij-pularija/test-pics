import styled from 'styled-components';

export const User = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  cursor: pointer;
  margin: 0;
  padding: 3px;


  // padding: 6px 4px 2px 4px;
  // border-radius: 5px;
  border-radius: 50%;
  border: 1px solid #757575;
  color: #757575;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(1.05);
    color: #ffffff;
    outline: none;
    border: 1px solid #2196f3;
    background-color: #2196f3;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const Item = styled.div`
  width: 220px;
  // height: calc( 100% - 36px);
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 10px 0;
`;

export const Button = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 10px 0;
  cursor: pointer;


  &:focus,
  &:hover {
    color: #ffffff;
    outline: none;
    background-color: #2196f3;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;


export const Avatar = styled.img`
  display: flex;
  width: 100px;
  object-position: 0 10px;
  object-fit: cover;
  border: none;
  background-color: #f5f5f5;
  border-radius: 50%;
  margin: 20px auto 0 auto;
`;