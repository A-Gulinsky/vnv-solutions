import styled from "@emotion/styled";

import { motion } from "framer-motion";

export const FeaturesBoxStyled = styled.div`
  position: relative;
  width: 450px;
  height: 400px;
  filter: drop-shadow(0px 0px 9px #a0c3ea);
  border-radius: 4px;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    background-color: #000;
    border-radius: 6px;
    clip-path: polygon(11% 0, 100% 0, 100% 71%, 100% 81%, 90% 93%, 37% 93%, 28% 100%, 0 100%, 0 23%, 0 0);

    width: 100%;
    height: 100%;
    
  }
`

export const DataContainer = styled.div`  
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;

  padding: 40px;
`

export const MotionDataContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;

  padding: 40px;
`

export const DescriptionDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AdvantageTitle = styled.h3`
  text-align: center;
  color: white;

  position: relative;
  margin-left: auto;
  margin-right: auto;

  font-family: 'Raleway';
  letter-spacing: 0.2em;
  font-size: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 15%;
    width: 70%;
    height: 1px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0px 0px 8px 2px #72a9e5
  }
`

export const AdvantageDescription = styled.b`
  text-align: center;
  color: #ffffffde;

  display: block;
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  font-family: 'Roboto';
  font-size: 18px;
  letter-spacing: 0.1em;
  line-height: 30px;

  z-index: 11;
`