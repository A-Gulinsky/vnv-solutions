import styled from "@emotion/styled";

import { motion } from "framer-motion";

export const Ul = styled.ul`
  position: relative;

  width: 400px;

  background-color: #000;

  height: 300px;
  outline: 2px solid blue;
  border: 2px solid silver;
  display: flex;
  gap: 10px;
`

const firstLi = {
  position: 'absolute',
  bottom: 40,
  left: 11,
  otate: '341deg',
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

const setLiStyle = ({ itemKey }) => {
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
      return `#000`
    }
}

export const Li = styled.li`
  border: 1px solid #fff;
  outline: transparent;

  width: 100px;
  height: 130px;

  opacity: 0.95;

  transition: 150ms ease;

  ${setLiStyle};

  &:hover {
    z-index: 15;
    opacity: 1;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: #000;
  outline: transparent;
  border: none;
`

export const DecoDiv = styled(motion.div)`

  position: absolute;
  top: 154px;
  right: 90px;

  width: 50px;
  height: 50px;
  background-color: black;
`

export const ItemTitle = styled.h3`
  text-align: center;
  padding: 5px;

  color: #fff;
`