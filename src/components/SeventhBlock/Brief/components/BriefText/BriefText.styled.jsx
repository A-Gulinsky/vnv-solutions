import styled from "@emotion/styled";

export const BriefTextH3 = styled.h3`
  font-family: 'Raleway',sans-serif;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 38px;
  color: #ffffff99;
  font-size: 30px;

  max-width: 550px;

  @media screen and (max-width: 1030px) {
    max-width: 400px;
    font-size: 28px;
    line-height: 30px;
  }

  @media screen and (max-width: 850px) {
    max-width: 350px;
    font-size: 24px;
    line-height: 28px;
  }

  @media screen and (max-width: 786px) {
    max-width: 350px;
    font-size: 24px;
    line-height: 28px;
  }

  @media screen and (max-width: 700px) {
    text-align: center;
  }

  @media screen and (max-width: 430px) {
    max-width: 300px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: #d4d4d4f1;
  }
`

export const BriefTitleB = styled.b`
  color: #e7c680d3;
  font-family: 'Roboto',sans-serif;
  letter-spacing: 0.2em;

  @media screen and (max-width: 700px) {
    width: 90px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 12px;
  }
`