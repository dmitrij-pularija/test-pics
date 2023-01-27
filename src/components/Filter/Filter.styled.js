import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0 15px;
`;

export const Label = styled.label`
  width: 100%;
  text-align: center;
  margin-bottom: 2px;
  color: #757575;
`;

export const Input = styled.input`
  display: flex;
  padding: 0 13px;
  border: 0;
  outline: 0;
  width: 100%;
  background-color: inherit;
  color: #757575;
  border-bottom: 1px solid #757575;
`;

export const Clear = styled.button`
  position: absolute;
  right: 10px;
  top: 20px;
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
  left: 14px;
  top: 22px;
  background-color: inherit;
  border: none;
  margin: 0;
  padding: 0;
  }
`;
