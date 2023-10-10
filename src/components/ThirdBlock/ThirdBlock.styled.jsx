import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 50px 15px;

  max-width: 1170px;
  margin: 0 auto;

  z-index: 10;
`

export const Title = styled.h2`
  text-align: left;
  margin-left: 40px;
  padding: 40px 0 60px 0;

  font-family: 'Raleway',sans-serif;
  font-weight: 200;
  font-size: 40px;
  color: #ffffffbb;

  @media screen and (max-width: 620px) {
    margin-left: 0;
    text-align: center;
  }
`