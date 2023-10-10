import styled from "@emotion/styled";

export const ButtonStyled = styled.button`

  background-color: transparent;
  border: 1px solid #ffffffeb;
  border-radius: 4px;
  padding: ${props => props.padding};

  color: #ffffffd4;

  cursor: pointer;

  display: none;

  transition: 250ms;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0px 0px 4px 1px #fffffff7;
  }

  @media screen and (max-width: 950px) {
    margin-left: auto;
  }

  @media screen and (min-width: 880px) {
    display: block;
  }
`