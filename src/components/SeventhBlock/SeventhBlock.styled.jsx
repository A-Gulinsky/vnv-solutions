import styled from "@emotion/styled";

import theme from 'assets/photo/theme-1.jpg'

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 30px 15px;
  padding-bottom: 100px;
`

export const Wrapper = styled.div`
  background: 
    linear-gradient(180deg,#000000 0%, rgba(0,255,0,0) 80%),
    linear-gradient(0deg,#000000 0%, rgba(0,255,0,0) 80%),
    url(${theme});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Title = styled.h2`
  padding: 40px;
  padding-bottom: 70px;

  font-family: 'Raleway',sans-serif;
  font-weight: 200;
  letter-spacing: 0.1em;
  font-size: 40px;
  color: #ffffffbb;
  text-align: center;

  @media screen and (max-width: 530px) {
    font-size: 32px;
  }

  @media screen and (max-width: 420px) {
    font-size: 24px;
  }
`