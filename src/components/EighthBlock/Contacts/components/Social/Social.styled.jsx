import styled from "@emotion/styled";

export const SocialContainer = styled.div`
  display: flex;

  margin-left: auto;
  margin-right: 80px;

  @media screen and (max-width: 800px) {
    margin-right: 10px;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`