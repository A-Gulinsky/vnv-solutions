import styled from "@emotion/styled";

export const Container = styled.div`

  position: fixed;
  bottom: 200px;
  right: 30px;

  display: flex;
  align-items: center;
  gap: 10px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;

  background-color: #000000eb;

  box-shadow: 0px 0px 5px 2px #07a4f8;
  border: 1px solid #138df0c0;
  outline: transparent;
  padding: 0;

  transition: 150ms;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`

// info
export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  flex-direction: column;

  box-shadow: 0px 0px 5px 1px #07a4f8;
  border: 1px solid #138df0c0;
  border-right: none;
  background-color: #000000eb;

  width: 200px;
  height: 50px;
  border-radius: 10px;

  cursor: default;
`

export const P = styled.p`
  color: white;
`

export const Ul = styled.ul`
  display: flex;
  gap: 10px;
`

export const Li = styled.li`
  color: white;
  display: flex;
  gap: 5px;
`

export const ListItemP = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #005effe2;
`

export const FirstDiscount = styled.span`
  color: #1eff01;
`

export const LastDiscount = styled.span`
  color: #87de05e3;
`

// svg
export const svgIcon = {
  width: 40,
  height: 40,
  fill: '#fff',
  filter: 'drop-shadow(0px 0px 6px #0229eb)'
}