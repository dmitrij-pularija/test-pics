import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: block;
  padding: 5px 15px;

  @media screen and (min-width: 480px) {
    height: 315px;
  }
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0;
  border-radius: 3px;
  background-color: #ffffff;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const Name = styled.p`
  width: 50%;
  display: flex;
  font-size: 14px;
  color: #757575;
`;

export const Number = styled.p`
  width: 40%;
  display: flex;
  padding-left: 2px;
  font-size: 14px;
  color: #757575;
  hyphens: auto;
`;

export const Del = styled.button`
  // width: 10%;

  background-color: inherit;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 10px;
  }
`;

export const Icon = styled.img`
  pointer-events: none;
  fill: currentColor;
`;

export const User = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  margin: 0 5px 0 10px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const Select = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
`;
