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
  font-size: 34px;
  color: #ffffffbb;
  letter-spacing: 0.2em;

  @media screen and (max-width: 860px) {
    font-size: 26px;
  }
`

export const TextP = styled(motion.p)`
  width: 300px;

  font-family: 'Raleway',sans-serif;
  font-weight: 400;
  font-size: 40px;
  color: #cadbe8b9;
  letter-spacing: 0.1em;

  @media screen and (max-width: 860px) {
    font-size: 32px;
    width: 250px;
  }

  @media screen and (max-width: 730px) {
    text-align: center;
  }
`