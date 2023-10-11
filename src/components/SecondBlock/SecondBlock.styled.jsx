import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  max-width: 1170px;
  margin: 0 auto;
  padding: 40px 15px;
  
  overflow: hidden;
`

export const ItemContainer = styled(motion.div)`
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

export const Title = styled(motion.h2)`
  padding: 40px 0 80px 0;

  font-family: 'Raleway',sans-serif;
  font-weight: 200;
  font-size: 40px;
  color: #ffffffbb;
  text-align: center;
`