
// emotion
import styled from "@emotion/styled";

// Left Links
export const LeftLinksUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  margin-right: 15px;
`

export const Li = styled.li`
  
  transition: 200ms;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`

export const LeftLinksA = styled.a`
  font-size: 20px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  color: #ffffffda;
`

// Right Links

export const RightLinksUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-left: 15px;
`

export const RightLinksA = styled.a`
  font-family: 'Roboto',sans-serif;
  font-size: 18px;
  text-decoration: none;
  color: #ffffffda;
`
