import styled from "@emotion/styled";

export const FillNowContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 65px;
`

export const SvgContainer = styled.div`
  display: inline-block;

  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #ffffffeb;
  border-radius: 4px;
  padding: 12px 25px;

  color: #ffffffd4;

  width: 80%;
  margin-right: auto;

  filter: drop-shadow(0px 0px 6px #f58012);

  cursor: pointer;

  transition: 250ms;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0px 0px 4px 1px #fffffff7;
  }

  @media screen and (max-width: 700px) {
    width: 150px;
    margin-right: 0;
  }
`