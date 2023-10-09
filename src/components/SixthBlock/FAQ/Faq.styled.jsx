import styled from "@emotion/styled";

export const GeneralContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 1100px) {
    justify-content: center;
    gap: 80px;
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`

export const FaqFirstList= styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FaqLastList= styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FaqQuestionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 64px;
  background-color: transparent;

  border: 1px solid #97c2efaf;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px #72aae5b0;

  padding: 0.8rem 1.2rem;

  @media screen and (max-width: 370px) {
    padding: 13px 5px;
  }
`

export const FaqQuestionH3 = styled.h3`
  font-family: 'Raleway';
  font-weight: 700;
  color: #ffffffcc;
  font-size: 16px;
  letter-spacing: 0.2em;
  text-align: center;
`

export const AnswerContainer = styled.div`
  padding: 0.8rem 1.2rem;
  width: 300px;
  border: 1px solid #97c2efaf;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px 0px 4px 1px #72aae5b0;

  @media screen and (max-width: 370px) {
    padding: 13px 5px;
  }
`

export const AnswerP = styled.p`
  text-align: center;
  color: #75a8c9d3;
  font-family: 'Roboto';
  letter-spacing: 0.1em;
  font-size: 16px;
`