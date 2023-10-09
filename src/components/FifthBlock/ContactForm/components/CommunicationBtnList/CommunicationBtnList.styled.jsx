import styled from "@emotion/styled";

export const CommunicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const InputTitle = styled.b`
  font-family: 'Raleway';
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: 16px;

  color: #ffffffc0;
`

export const Ul = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  padding: 10px;
  margin: 0;
  border: none;
  background-color: transparent;
  border: 1px solid transparent;
  border: ${props => props.active && '1px solid #ffffffc7'};
  border-radius: 100%;

  transition: 200ms;

  cursor: pointer;

  &:hover {
    transform: scale(1.07);
  }
`