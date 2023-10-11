import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  display: none;

  padding: ${props => props.padding};

  color: #ffffffd4;

  background-color: transparent;
  border: 1px solid #ffffffeb;
  border-radius: 4px;

  transition: 250ms;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 4px 1px #fffffff7;

    transform: scale(1.06);
  }

  @media screen and (max-width: 950px) {
    margin-left: auto;
  }

  @media screen and (min-width: 880px) {
    display: block;
  }
`