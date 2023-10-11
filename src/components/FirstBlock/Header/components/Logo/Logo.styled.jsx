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
  font-family: 'Raleway',sans-serif;
  font-weight: 200;
  font-size: 16px;
  color: #ffffffdc;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

// SVG Style
export const logoStyle1 = {
  width: 50,
  height: 50,
  fill: '#ffffffc7',
  filter: 'drop-shadow(0px 0px 5px #007bff)',
  transform: 'translateX(17px)'
}

export const logoStyle2 = {
  width: 50,
  height: 50,
  fill: '#ffffffc7',
  filter: 'drop-shadow(0px 0px 5px #007bff)'
}

export const logoStyle3 = {
  width: 50,
  height: 50,
  fill: '#ffffffc7',
  filter: 'drop-shadow(0px 0px 5px #007bff)',
  transform: 'translateX(-17px)'
}