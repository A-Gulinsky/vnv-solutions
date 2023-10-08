import styled from "@emotion/styled";

export const ServicesContainer = styled.div`

  position: relative;

  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 650px;

  padding: 0 40px;

  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #ffffffbb;
    box-shadow: 0px 0px 8px 2px #72a9e5;
  }

  @media screen and (max-width: 820px) {
    height: 580px;
  }

  @media screen and (max-width: 440px) {
    height: 620px;
    padding: 20px;
  }

  @media screen and (max-width: 400px) {
    height: 670px;
    padding: 10px;
  }
`