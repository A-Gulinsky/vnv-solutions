import styled from "@emotion/styled";

export const MobileButtonStyled = styled.button`
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 40px;

  color: #ffffffd4;

  background-color: transparent;
  border: 1px solid #ffffffeb;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px #fffffff7;
  
  transition: 250ms;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 4px 1px #fffffff7;

    transform: scale(1.06);
  }
`