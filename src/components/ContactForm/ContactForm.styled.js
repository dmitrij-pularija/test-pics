import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  padding: 20px 20px;
  border-radius: 5px;
  border: 1px solid black;
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
`;

export const Input = styled.input`
padding-left: 18px;
  border: 0;
  outline: 0;
  width: 100%;
  background-color: inherit;
  border-bottom: 1px solid black;
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: inherit;
  border: 1px solid black;
  &:focus,
  &:hover {
    color: #ffffff;
    border: 1px solid #ffffff;
    background-color: #13d6ec;
  }
`;


export const Avatar = styled.img`
display: flex;
width: 120px;
object-position: 0 10px;
object-fit: cover;
border: none;
background-color: #f5f5f5;
border-radius: 50%;
margin: 20px auto 30px auto;
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
