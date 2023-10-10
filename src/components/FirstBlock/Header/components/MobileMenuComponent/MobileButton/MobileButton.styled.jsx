import styled from "@emotion/styled";

export const MobileButtonStyled = styled.button`

  display: none;

  margin-left: auto;

  border: none;
  background-color: transparent;
  padding: 0;

  @media screen and (max-width: 879px) {
    display: block;
  }
`

export const svgStyle = {
  width: 50,
  height: 50,
  fill: '#ffffffe2'
}