import styled from "@emotion/styled";

export const FillNowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
`

export const SvgContainer = styled.div`
  display: inline-block;

  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const Button = styled.button`
  margin-right: auto;
  padding: 12px 25px;
  width: 80%;

  color: #ffffffd4;

  background-color: transparent;
  border: 1px solid #ffffffeb;
  border-radius: 4px;

  filter: drop-shadow(0px 0px 6px #f58012);
  cursor: pointer;
  transition: 250ms;

  &:hover,
  &:focus {
    transform: scale(1.06);
    box-shadow: 0px 0px 4px 1px #fffffff7;
  }

  @media screen and (max-width: 700px) {
    width: 150px;
    margin-right: 0;
  }
`

// svg

export const svgStyle = {
  width: 300,
  height: 300,
  fill: '#ffffffae',
  filter: 'drop-shadow(0px 0px 6px #f58012)'
}