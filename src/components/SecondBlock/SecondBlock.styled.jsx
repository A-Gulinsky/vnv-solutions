import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1170px;
  padding: 40px 15px;
  margin: 0 auto;
`

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 870px) {
    flex-direction: column-reverse;
    gap: 80px;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`

export const Title = styled.h2`
  text-align: center;
  padding: 40px 0 80px 0;

  font-family: 'Raleway';
  font-weight: 200;
  font-size: 40px;
  color: white;
`