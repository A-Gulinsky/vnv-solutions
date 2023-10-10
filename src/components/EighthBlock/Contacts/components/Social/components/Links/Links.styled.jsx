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

  &:hover {
    transform: scale(1.03);
  }
`

export const LeftLinksA = styled.a`
  text-decoration: none;

  font-size: 20px;

  font-family: 'Roboto';
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
  text-decoration: none;

  font-size: 18px;

  font-family: 'Roboto';
  color: #ffffffda;
`
