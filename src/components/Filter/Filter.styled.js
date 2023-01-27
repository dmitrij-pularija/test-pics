import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0 10px;
  font-size: 22px;
`;

export const Label = styled.label`
  width: 100%;
  text-align: center;
  margin-bottom: 2px;
  color: #757575;
`;

export const Input = styled.input`
  display: flex;
  padding: 0 20px;
  border: 0;
  outline: 0;
  width: calc(100% - 50px);
  font-size: 24px;
  background-color: inherit;
  color: #757575;
  border-bottom: 1px solid #757575;
`;

export const Clear = styled.button`
  position: absolute;
  right: 55px;
  top: 38px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(1.2);
    fill: red;
  }
`;

export const Icon = styled.img`
  pointer-events: none;
  fill: currentColor;
`;

export const Search = styled.div`
  position: absolute;
  left: 9px;
  top: 43px;
  background-color: inherit;
  border: none;
  margin: 0;
  padding: 0;
  }
`;

export const Add = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: inherit;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 6px 4px 2px 4px;
  border-radius: 5px;
  border: 1px solid #757575;
  color: #757575;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    color: #ffffff;
    border: 1px solid #2196f3;
    background-color: #2196f3;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const InputField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
`;