import styled from "@emotion/styled"

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 90%;
  padding-left: 10px;

  border: 1px solid black;
  border-radius: 4px;

  transition: 200ms;

  border: 1px solid #615e5e;

  &:hover {
    box-shadow: 0px 0px 2px 2px #d5d2d24a;
  }
`

export const Input = styled.input`
  display: block;
  width: 100%;

  padding: 8px 8px;

  background-color: transparent;
  color: #ffffffc6;

  font-size: 16px;

  border-radius: 4px;
  border: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  outline: transparent;

  &::placeholder {
    color: white;
  }
`