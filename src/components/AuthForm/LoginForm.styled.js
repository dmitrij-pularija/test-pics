import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  // margin: 15px;
//   color: #ffffff;
overflow: hidden;

  position: relative;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;


export const Back = styled(Link)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
//   border: 1px solid #212121;
  color: #212121;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(1.3);
    // border: 1px solid #f32013;
    color: #f32013;
  }
`;