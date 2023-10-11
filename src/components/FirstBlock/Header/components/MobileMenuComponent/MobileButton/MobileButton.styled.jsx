import styled from "@emotion/styled";

export const MobileButtonStyled = styled.button`
  display: none;
  margin-left: auto;
  padding: 0;

  background-color: transparent;
  border: none;

  @media screen and (max-width: 879px) {
    display: block;
  }
`

export const svgStyle = {
  width: 50,
  height: 50,
  fill: '#ffffffe2'
}