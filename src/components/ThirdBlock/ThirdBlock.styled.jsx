import styled from "@emotion/styled";

import theme from 'assets/photo/theme-3.jpg'
import test from 'assets/photo/test.jpg'

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 50px 15px 120px;

  z-index: 10;
`

export const Wrapper = styled.div`
  background-image: url(${theme});

  background: 
    linear-gradient(180deg,#000000 0%, rgba(0,255,0,0) 85%),
    linear-gradient(0deg,#000000 0%, rgba(0,255,0,0) 85%),
    url(${test});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Title = styled.h2`
  margin-left: 40px;
  padding: 40px 0 60px 0;

  font-family: 'Raleway',sans-serif;
  font-weight: 200;
  font-size: 40px;
  color: #ffffffbb;
  text-align: left;

  @media screen and (max-width: 620px) {
    margin-left: 0;
    
    text-align: center;
  }
`