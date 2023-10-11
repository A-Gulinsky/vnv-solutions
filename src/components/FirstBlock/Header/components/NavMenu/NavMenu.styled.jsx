import styled from "@emotion/styled";

export const Nav = styled.nav`
  display: none;
  margin-left: auto;
  margin-right: 80px;

  @media screen and (max-width: 950px) {
    margin-left: 30px;
    margin-right: 30px;
  }

  @media screen and (min-width: 880px) {
    display: block;
  }
`

export const Ul = styled.ul`
  display: flex;
  gap: 20px;

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
  font-size: 18px;
  color: #ffffffdc;
  letter-spacing: 0.1em;
  text-decoration: none;

  transition: 200ms;

  &:hover,
  &:focus{
    color: #fff;
  }

  @media screen and (max-width: 920px) {
    font-size: 16px;
  }
`