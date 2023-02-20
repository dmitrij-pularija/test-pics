import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 0 10px;
  font-size: 22px;
  gap: 15px;
`;

export const Label = styled.label`
  width: 100%;
  text-align: center;
  margin-bottom: 2px;
  color: #757575;
`;

export const Input = styled.input`
  display: flex;
  padding: 0 24px;
  border: 0;
  outline: 0;
  width: 100%;
  font-size: 24px;
  background-color: inherit;
  color: #757575;
  border-bottom: 1px solid #757575;
  
  &::placeholder {
  font-size: 22px;
  color: #3d3c3ca6;
  } 

  &:focus,
  &:hover {
    border-bottom: 1px solid #3575f5;
`;

export const Clear = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  right: -7px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border: none;
  color: currentColor;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(1.3);
    color: #f32013;
  }
`;

export const Search = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 6px;
  left: -1px;
  background-color: inherit;
  border: none;
  margin: 0;
  padding: 0;
  color: currentColor;

&:focus,
&:hover {
  transform: scale(1.3);
  color: #3575f5;
}
  }
`;

export const Add = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  cursor: pointer;
  margin: 0;
  padding: 6px 4px 2px 4px;
  border-radius: 5px;
  border: 1px solid #757575;
  color: #757575;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(1.05);
    color: #ffffff;
    outline: 1px solid #2196f3;
    border: 1px solid #2196f3;
    background-color: #2196f3;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const InputField = styled.div`
position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #757575;

  &:focus,
  &:hover {
    color: #3575f5;
`;