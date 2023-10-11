import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 50px 15px;

  z-index: 10;
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