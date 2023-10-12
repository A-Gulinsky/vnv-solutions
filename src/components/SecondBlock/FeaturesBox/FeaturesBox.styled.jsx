import styled from "@emotion/styled";

import { motion } from "framer-motion";

export const FeaturesBoxStyled = styled(motion.div)`
  position: relative;
  width: 450px;
  height: 400px;

  border-radius: 4px;

  z-index: 10;

  

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: #000;
    border-radius: 6px;

    @media screen and (min-width: 450px) {
      clip-path: polygon(11% 0, 100% 0, 100% 71%, 100% 81%, 90% 93%, 37% 93%, 28% 100%, 0 100%, 0 23%, 0 0);
    }

    @media screen and (max-width: 449px) {
      box-shadow: 0px 0px 3px 1px #a0c3ea;
    }
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

  @media screen and (min-width: 450px) {
    filter: drop-shadow(0px 0px 9px #a0c3ea);
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

  @media screen and (max-width: 600px) {
    padding: 8px;
  }
`

export const MotionDataContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  padding: 40px;

  @media screen and (max-width: 1022px) {
    gap: 20px;
  }

  @media screen and (max-width: 866px) {
    padding: 15px;
  }

  @media screen and (max-width: 600px) {
    padding: 8px;
  }
`

export const DescriptionDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AdvantageTitle = styled.h3`
  position: relative;

  margin-left: auto;
  margin-right: auto;

  font-family: 'Raleway',sans-serif;
  font-size: 20px;
  color: white;
  letter-spacing: 0.2em;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 15%;
    width: 70%;
    height: 1px;

    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0px 0px 8px 2px #72a9e5
  }
`

export const AdvantageDescription = styled.b`
  display: block;
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  font-family: 'Roboto',sans-serif;
  font-size: 18px;
  color: #ffffffde;
  text-align: center;
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
    font-size: 18px;
    line-height: 30px;
  }

  @media screen and (max-width: 500px) {
    width: 240px;
    font-size: 14px;
    line-height: 17px;
  }
`

export const svgIcon = {
  width: 80,
  height: 80,
  fill: '#fff',
  filter: "drop-shadow(0px 0px 15px #4ea0f6)"
}