import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: block;
  padding: 10px;

  @media screen and (min-width: 480px) {
    height: 365px;
  }
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-size: 16px;
  color: currentColor;
`;

export const Number = styled.p`
  width: 40%;
  display: flex;
  padding-left: 2px;
  font-size: 16px;
  color: currentColor;
  hyphens: auto;
`;

export const Del = styled.button`
  height: 100%;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 8px;
  background-color: inherit;
  color: #757575;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(1.1);
    color: #f32013;
  }
`;

export const User = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  margin: 0 10px;
  border-radius: 50%;
  border: 1px solid currentColor;
`;

export const Select = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
  color: #757575;

  &:focus,
  &:hover {
    color: #3575f5;
`;