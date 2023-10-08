import styled from "@emotion/styled";

export const MobileButtonStyled = styled.button`
  width: 50px;
  height: 50px;

  display: none;

  margin-left: auto;

  border: none;
  background-color: red;

  @media screen and (max-width: 879px) {
    display: block;
  }
`