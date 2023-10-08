import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 200px 80px 250px;

  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: end;

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
  font-family: 'Raleway';
  font-weight: 300;

  text-align: center;

  text-shadow: 0px 0px 4px rgba(90, 153, 216, 0.599);

  line-height: 70px;
  width: 450px;
  font-size: 50px;
  color: #ffffffbb;

  @media screen and (max-width: 523px) {
    font-size: 32px;
    width: 300px;
  }

  @media screen and (max-width: 380px) {
    font-size: 28px;
    width: 280px;
  }
`