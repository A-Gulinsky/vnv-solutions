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

  &:hover,
  &:focus {
    color: #fff;

    transform: scale(1.03);
  }
`

export const Link = styled.a`
  padding: 10px 0;

  font-family: 'Raleway',sans-serif;
  font-weight: 600;
  font-size: 28px;
  color: #ffffffdc;
  letter-spacing: 0.1em;
  text-decoration: none;

  transition: 200ms;

  &:hover,
  &:focus {
    color: #fff;
  }
`