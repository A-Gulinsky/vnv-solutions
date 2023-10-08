import styled from "@emotion/styled";

import { motion } from "framer-motion";

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

// UPPER CONTAINER ELEMENTS
export const UpperDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDir};
  justify-content: space-around;
  padding: 10px;
`

export const UpperItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const H3 = styled(motion.h3)`
  position: relative;

  font-family: 'Raleway';
  font-weight: 300;
  text-align: center;
  color: #ffffffbb;

  width: ${props => props.width};

  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: #ffffffbb;
    box-shadow: 0px 0px 8px 2px #72aae5dd;
  }
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const Li = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 8px;

`

export const P = styled.p`
  font-family: 'Raleway';
  font-size: 16px;
  font-weight: 300;

  color: #ffffffbb;
`

export const Img = styled(motion.img)`
  width: 300px;
  height: 280px;
`

// LowerContainer


export const DescriptionP = styled(motion.p)`
  font-family: 'Roboto';
  text-align: center;
  color: #ffffffb6;

  font-size: 18px;
  letter-spacing: 0.1em;
`

export const iconStyle = {
  fill: '#ffffffbb',
  width: 20,
  height: 20,
  filter: 'drop-shadow(rgb(78, 160, 246) 0px 0px 10px)'
}