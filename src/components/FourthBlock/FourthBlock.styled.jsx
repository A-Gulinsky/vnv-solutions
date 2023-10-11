import styled from "@emotion/styled";

export const Title = styled.h2`
  padding: 10px 0 10px 0;

  font-family: 'Raleway',sans-serif;
  font-weight: 200;
  font-size: 40px;
  color: #ffffffbb;
  text-align: center;
`

export const Container = styled.div`
  max-width: 1170px;
  padding: 40px 15px 90px;
  margin: 0 auto;

  @media screen and (max-width: 690px) {
    padding: 40px 0;
  }
`