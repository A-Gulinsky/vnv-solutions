import styled from "@emotion/styled"

export const BasicInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const InputTitle = styled.b`

  font-family: 'Raleway';
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: 20px;

  color: #ffffffc0;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 90%;
  padding-left: 10px;

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

  color: #ffffffc5;

  &::placeholder {
    color: white;
  }

  font-size: 16px;
  background-color: transparent;

  border-radius: 4px;
  border: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  outline: transparent;
`

export const P = styled.p`
  margin-bottom: 5px;

  font-weight: 600;
  text-align: center;
  color: #064ec1;
`