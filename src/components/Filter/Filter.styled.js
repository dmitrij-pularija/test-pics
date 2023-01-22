import styled from 'styled-components';


export const Box = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0 15px 0 20px;
`;

export const Label = styled.label`
  width: 100%;
  text-align: center;
  margin-bottom: 2px;
`;

export const Input = styled.input`
display: flex;
padding-left: 15px;
  border: 0;
  outline: 0;
  width: 100%;
  background-color: inherit;
  border-bottom: 1px solid black;
`;

export const Clear = styled.button`
position: absolute;
right: 15px;
top: 25px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  &:focus,
  &:hover {
    transform: scale(1.1);
    // filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
    fill: red;
  }
`;

export const Icon = styled.img`

  pointer-events: none;
  fill: currentColor;
`;

export const Search = styled.div`
position: absolute;
left: 20px;
top: 25px;
  background-color: inherit;
  border: none;
  margin: 0;
  padding: 0;
  }
`;