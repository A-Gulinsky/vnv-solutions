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

  font-family: 'Raleway',sans-serif;
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

  @media screen and (max-width: 450px) {
    font-size: 14px;
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
  font-family: 'Raleway',sans-serif;
  font-size: 16px;
  font-weight: 300;

  color: #ffffffbb;
`

export const Img = styled(motion.img)`
  width: 300px;
  height: 280px;

  @media screen and (max-width: 890px) {
    width: 250px;
    height: 230px;
  }
  @media screen and (max-width: 690px) {
    width: 200px;
    height: 180px;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`

// LowerContainer


export const DescriptionP = styled(motion.p)`
  font-family: 'Roboto',sans-serif;
  text-align: center;
  color: #ffffffb6;

  font-size: 18px;
  letter-spacing: 0.1em;

  @media screen and (max-width: 980px) {
    font-size: 16px;
  }

  @media screen and (max-width: 860px) {
    font-size: 14px;
  }
`

export const ButtonIWant = styled.button`
  background-color: transparent;
  border: 1px solid #ffffffeb;
  border-radius: 4px;
  padding: 7px 25px;

  color: #ffffffd4;

  width: 70%;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;

  box-shadow: 0px 0px 4px 1px #fffffff7;

  cursor: pointer;

  transition: 250ms;

  &:hover,
  &:focus {
    transform: scale(1.06);
    box-shadow: 0px 0px 4px 1px #fffffff7;
  }
`

export const iconStyle = {
  fill: '#ffffffbb',
  width: 20,
  height: 20,
  filter: 'drop-shadow(rgb(78, 160, 246) 0px 0px 10px)'
}