import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 300px;

  padding: 25px;

  border: 1px solid #615e5e;
  background-color: #000000d4;
  border-radius: 4px;

  @media screen and (max-width: 380px) {
    width: 280px;
    padding: 25px 10px;
  }
`

export const P = styled.p`
  margin-bottom: 5px;

  font-weight: 600;
  text-align: center;
  color: #064ec1;
`

export const Button = styled.input`
  padding: 10px 15px;

  color: white;

  background-color: #1d6be7;
  border: 1px solid transparent;
  border-radius: 4px;

  transition: 150ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #064ec1;
  }
`