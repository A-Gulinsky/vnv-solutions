import styled from "@emotion/styled";

export const Ul = styled.ul`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  color: white;
`

export const Li = styled.li`

  transition: 200ms;
  &:hover {
    transform: scale(1.03);
    color: #fff;
  }
`

export const Link = styled.a`
  padding: 10px 0;
  text-decoration: none;
  font-size: 28px;
  font-family: 'Raleway',sans-serif;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #ffffffdc;

  transition: 200ms;

  &:hover {
    color: #fff;
  }
`