import styled from "@emotion/styled";

export const TextAreaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const TextAreaTitle = styled.b`
  font-family: 'Raleway';
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: 20px;

  color: #ffffffc0;
`

export const TextAreaStyled = styled.textarea`
  resize: none;

  width: 90%;
  height: 80px;

  background-color: transparent;
  color: #ffffffcc;

  outline: none;

  padding: 10px;
  border-radius: 2px;
`