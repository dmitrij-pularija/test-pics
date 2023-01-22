import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 15px 20px 15px;
  padding: 20px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #757575;

  @media screen and (min-width: 380px) {
    width: 74%;
    margin: 0 auto 20px auto;
  }

  @media screen and (min-width: 480px) {
    width: 50%;
    margin: 0 15px 0 0;
  }
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
  text-align: left;
  margin-bottom: 2px;
  font-size: 14px;
  color: #757575;
`;

export const Input = styled.input`
  padding-left: 18px;
  border: 0;
  outline: 0;
  width: 100%;
  color: #757575;
  background-color: inherit;
  border-bottom: 1px solid #757575;
`;

export const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #f5f4fa;
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
  width: 122px;
  object-position: 0 10px;
  object-fit: cover;
  border: none;
  background-color: #f5f5f5;
  border-radius: 50%;
  margin: 20px auto;
`;

export const Icon = styled.img`
  pointer-events: none;
  fill: currentColor;
`;

export const IconBox = styled.div`
  position: absolute;
  left: 0;
  top: 20px;
  background-color: inherit;
  border: none;
  margin: 0;
  padding: 0;
  }
`;