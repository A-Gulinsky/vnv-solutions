import styled from "@emotion/styled";

export const BriefContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 80px;
  }

  @media screen and (max-width: 430px) {
    gap: 40px;
  }
`