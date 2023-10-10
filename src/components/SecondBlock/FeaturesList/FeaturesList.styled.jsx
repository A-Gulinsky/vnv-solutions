import styled from "@emotion/styled";

import { motion } from "framer-motion";

export const Ul = styled.ul`
  position: relative;

  width: 400px;

  background-color: #000;

  height: 300px;
  display: flex;
  gap: 10px;

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: -13px;
    width: 120%;
    rotate: 351deg;
    height: 4px;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0px 0px 8px 2px #72a9e5;

    @media screen and (max-width: 1140px) {
      width: 100%;
    }

    @media screen and (max-width: 870px) {
      display: none;
    }
  }

  @media screen and (max-width: 420px) {
      width: 320px;
  }
`

const firstLi = {
  position: 'absolute',
  bottom: 40,
  left: 11,
  rotate: '341deg',
  zIndex: 10
}

const secondLi = {
  position: 'absolute',
  bottom: 97,
  left: 41,
  
  rotate: '344deg',
  zIndex: 9
}

const thirdLi = {
  position: 'absolute',
  bottom: 149,
  left: 103,
  
  rotate: '356deg',
  zIndex: 8
}

const fourthLi = {
  position: 'absolute',
  bottom: 112,
  left: 197,
  
  rotate: '12deg',
  zIndex: 8
}

const fifthLi = {
  position: 'absolute',
  bottom: 50,
  left: 212,
  
  rotate: '8deg',
  zIndex: 8
}

const sixthLi = {
  position: 'absolute',
  bottom: 157,
  left: 243,
  
  rotate: '21deg',
  zIndex: 7
}

// mob
const fourthLiMob = {
  position: 'absolute',
  bottom: 87,
  left: 147,
  
  rotate: '12deg',
  zIndex: 8
}

const fifthLiMob = {
  position: 'absolute',
  bottom: 23,
  left: 169,
  
  rotate: '8deg',
  zIndex: 8
}

const sixthLiMob = {
  position: 'absolute',
  bottom: 157,
  left: 185,
  rotate: '21deg',
  zIndex: 7
}

function setLiStyle({ itemKey }) {
  switch (itemKey) {
    case 1:
      return firstLi;
    case 2:
      return secondLi;
    case 3:
      return thirdLi;
    case 4:
      return fourthLi;
    case 5:
      return fifthLi;
    case 6:
      return sixthLi;
    default:
      return `#000`;
  }
}

function setLiStyleMob({ itemKey }) {
  switch (itemKey) {
    case 1:
      return firstLi;
    case 2:
      return secondLi;
    case 3:
      return thirdLi;
    case 4:
      return fourthLiMob;
    case 5:
      return fifthLiMob;
    case 6:
      return sixthLiMob;
    default:
      return `#000`;
  }
}

export const Li = styled.li`
  border: 1px solid #fff;
  outline: transparent;

  width: 100px;
  height: 130px;

  opacity: 0.95;

  border-radius: 4px;

  transition: 150ms ease;

  &:hover {
    z-index: 15;
    opacity: 1;
    transform: translateY(-10px) scale(1.1);
  }

  @media screen and (min-width: 421px) {
    ${setLiStyle};
  }

  @media screen and (max-width: 420px) {
    ${setLiStyleMob}
  }
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: #000;
  outline: transparent;
  border: none;
  box-shadow: 0px 0px 8px 2px #72a9e5;

  cursor: pointer;
`

export const DecoDiv = styled(motion.div)`

  position: absolute;
  top: 154px;
  right: 90px;

  z-index: 3;

  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 6px #72a9e5;
`

export const ItemTitle = styled.h3`
  text-align: center;
  padding: 5px;

  font-family: 'Relative',sans-serif;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: #fff;
`

export const ClickMe = styled.b`
  position: absolute;
  bottom: -26px;
  left: 0;
  rotate: 352deg;

  font-family: 'Raleway',sans-serif;
  letter-spacing: 0.02em;
  font-weight: 200;

  @media screen and (max-width: 870px) {
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    font-size: 20px;
  }

  @media screen and (max-width: 420px) {
    bottom: -20px;
    rotate: 0deg;
  }
`