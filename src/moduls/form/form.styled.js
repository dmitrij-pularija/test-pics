import { Form, Field } from 'formik';
import styled from 'styled-components';

export const Forma = styled(Form)`
width: 100%;
height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: space-between;
  // justify-content: center;
  background-color: inherit;
  padding: 15px 30px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Item = styled.li`
width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #757575;

  &:focus,
  &:hover {
    color: #3575f5;
  }  
`;

export const Label = styled.label`
  width: 100%;
  text-align: left;
  margin-bottom: 2px;
  font-size: 18px;
  color: #757575;
`;

export const Input = styled(Field)`
width: 100%;
  padding: 2px 0 2px 25px;
  border: 0;
  outline: 0;
  color: #757575;
  background-color: inherit;
  border-bottom: 1px solid #757575;

  &:focus,
  &:hover {
    border-bottom: 1px solid #3575f5;
  } 
`;

export const Button = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  // margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  background-color: inherit;
  // background-color: #f5f4fa;
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

export const Avatar = styled.img`
  display: flex;
  width: 125px;
  object-position: 0 10px;
  object-fit: cover;
  border: none;
  background-color: #f5f5f5;
  border-radius: 50%;
  margin: 0 auto;
`;

export const IconBox = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 0;
  top: 25px;
  background-color: inherit;
  border: none;
  margin: 0;
  padding: 0;
`;

export const Show = styled.button`
position: absolute;
right: 0;
bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  cursor: pointer;
  // border-radius: 5px;
  background-color: inherit;
  // background-color: #f5f4fa;
  border: none;
  color: #757575;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
   transform: scale(1.2);

    color: #2196f3;
  border: none;
    // border: 1px solid #2196f3;
    // background-color: #2196f3;
    shadow-filter: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;