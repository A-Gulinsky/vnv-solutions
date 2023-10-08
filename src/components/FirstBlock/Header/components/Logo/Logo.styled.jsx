import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
`

export const Text = styled(motion.p)`
  font-family: 'Raleway';
  font-weight: 200;
  font-size: 16px;
  color: #ffffffdc;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`