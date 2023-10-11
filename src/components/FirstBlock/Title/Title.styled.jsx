import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  padding: 100px 80px 350px;

  @media screen and (max-width: 779px) {
    flex-direction: column;
    align-items: center;

    padding: 200px 30px 250px;
  }

  @media screen and (max-width: 380px) {
    padding: 100px 0 120px;
  }
`

export const H1 = styled.h1`
  width: 450px;

  font-family: 'Raleway',sans-serif;
  font-weight: 300;
  font-size: 50px;
  text-align: center;
  text-shadow: 0px 0px 4px rgba(90, 153, 216, 0.599);
  line-height: 70px;
  color: #ffffffbb;

  @media screen and (max-width: 523px) {
    width: 300px;

    font-size: 32px;
  }

  @media screen and (max-width: 380px) {
    width: 280px;

    font-size: 28px;
  }
`