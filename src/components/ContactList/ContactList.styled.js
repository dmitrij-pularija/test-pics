import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 15px 0 20px;
  gap 10px;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 3px;
  background-color: #ffffff;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover,
  &:focus {
  transform: scale(1.05);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}
`;

export const Name = styled.p`
  width: 45%;
  display: flex;
  // text-align: left;
  font-size: 14px;
`;

export const Number = styled.p`
  width: 35%;
  display: flex;
  // text-align: left;
  font-size: 14px;
  hyphens: auto;
`;

export const Del = styled.button`
  // width: 10%;

  background-color: inherit;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 3px;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  &:focus,
  &:hover {
    transform: scale(1.1);
    // filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
    fill: red;
  }
`;

export const Icon = styled.img`
// margin-bottom: -1px;

  pointer-events: none;
  fill: currentColor;
  // fill: '#ffff00';
`;

export const User = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid black;
`;
