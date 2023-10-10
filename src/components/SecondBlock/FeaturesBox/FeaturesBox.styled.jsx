import styled from "@emotion/styled";

import { motion } from "framer-motion";

export const FeaturesBoxStyled = styled(motion.div)`
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

  @media screen and (max-width: 1022px) {
    width: 350px;
    height: 300px;
  }

  @media screen and (max-width: 780px) {
    width: 450px;
    height: 350px;
  }

  @media screen and (max-width: 511px) {
    width: 350px;
    height: 300px;
  }

  @media screen and (max-width: 390px) {
    width: 280px;
    height: 250px;
  }
`

export const DataContainer = styled.div`  
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;

  padding: 40px;

  @media screen and (max-width: 1022px) {
    gap: 20px;
  }

  @media screen and (max-width: 866px) {
    padding: 15px;
  }
`

export const MotionDataContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;

  padding: 40px;

  @media screen and (max-width: 1022px) {
    gap: 20px;
  }

  @media screen and (max-width: 866px) {
    padding: 15px;
  }
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

  font-family: 'Raleway',sans-serif;
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

  font-family: 'Roboto',sans-serif;
  font-size: 18px;
  letter-spacing: 0.1em;
  line-height: 30px;

  z-index: 11;

  @media screen and (max-width: 1022px) {
    width: 250px;
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 780px) {
    width: 300px;
    line-height: 30px;
    font-size: 18px;
  }

  @media screen and (max-width: 390px) {
    width: 200px;
    font-size: 14px;
    line-height: 15px;
  }
`