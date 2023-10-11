import styled from "@emotion/styled";

import { motion } from "framer-motion";

export const Ul = styled(motion.ul)`
  position: relative;

  display: flex;
  gap: 10px;
  width: 400px;
  height: 300px;

  z-index: 4;

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: -13px;

    width: 100%;
    height: 4px;
    rotate: 351deg;

    background-color: #ffffff;
    border-radius: 2px;
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

// styled li
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

// styled mob li
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

// funcs for li
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
  width: 100px;
  height: 130px;

  border: 1px solid #fff;
  border-radius: 4px;

  opacity: 0.95;
  outline: transparent;
  transition: 150ms ease;

  &:hover,
  &:focus {
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
  border: none;
  box-shadow: 0px 0px 8px 2px #72a9e5;

  outline: transparent;

  cursor: pointer;
`

export const DecoDiv = styled(motion.div)`
  position: absolute;
  top: 154px;
  right: 90px;
  width: 20px;
  height: 20px;
  
  background-color: #ffffff;
  border-radius: 100%;
  box-shadow: 0px 0px 8px 6px #72a9e5;

  z-index: 3;
`

export const ItemTitle = styled.h3`
  padding: 5px;

  font-family: 'Relative',sans-serif;
  font-weight: 400;
  color: #fff;
  text-align: center;
  letter-spacing: 0.05em;
`

export const ClickMe = styled(motion.b)`
  position: absolute;
  bottom: -26px;
  left: 0;
  
  rotate: 352deg;

  font-family: 'Raleway',sans-serif;
  font-weight: 200;
  letter-spacing: 0.02em;

  @media screen and (max-width: 870px) {
    left: 50%;
    bottom: -10px;

    font-size: 20px;

    transform: translateX(-50%);
  }

  @media screen and (max-width: 420px) {
    bottom: -20px;

    rotate: 0deg;
  }
`