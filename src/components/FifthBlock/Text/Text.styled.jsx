import styled from "@emotion/styled";

import { motion } from "framer-motion";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (max-width: 730px) {
    justify-content: center;
    align-items: center;
  }
`

export const TextTitle = styled(motion.h3)`
  font-family: 'Raleway',sans-serif;
  font-weight: 600;
  color: #ffffffbb;

  letter-spacing: 0.2em;
  font-size: 34px;

  @media screen and (max-width: 860px) {
    font-size: 26px;
  }
`

export const TextP = styled(motion.p)`
  font-family: 'Raleway',sans-serif;
  font-weight: 400;
  color: #cadbe8b9;

  width: 300px;

  letter-spacing: 0.1em;
  font-size: 40px;

  @media screen and (max-width: 860px) {
    font-size: 32px;
    width: 250px;
  }

  @media screen and (max-width: 730px) {
    text-align: center;
  }
`