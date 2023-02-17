import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(223, 222, 222, 0.8);
  z-index: 999;
`;

export const Mod = styled.div`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Close = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border: 1px solid #212121;
  color: #212121;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(1.05);
    border: 1px solid #f32013;
    color: #f32013;
  }
`;