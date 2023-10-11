import styled from "@emotion/styled";

export const TopElementsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 20px 0;

  @media screen and (orientation: landscape) {
    margin-bottom: auto;
  }
`

export const ButtonBack = styled.button`
  margin: 0;
  padding: 0;

  background-color: transparent;
  border: none;
  
  outline: none;
`

export const svgStyle = {
  width: 40,
  height: 40,
  fill: '#fff'
}