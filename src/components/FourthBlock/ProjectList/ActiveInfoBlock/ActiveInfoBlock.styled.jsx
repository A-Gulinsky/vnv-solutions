import styled from "@emotion/styled"
import { motion } from "framer-motion"

export const ActiveInfoContainer = styled(motion.div)`
  position: relative;

  width: 100%;
  height: 100%;
  background-color: #000000; 

  z-index: 5;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 4px;
    height: 100%;

    border-radius: 2px;
    background-color: #ffffffbb;
    box-shadow: 0px 0px 4px 1px #72a9e5;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 4px;
    height: 100%;

    border-radius: 2px;
    background-color: #ffffffbb;
    box-shadow: 0px 0px 4px 1px #72a9e5;
  }
`

export const AdditionalContainer = styled.div`
  position: relative;

  padding: 20px 0px 30px 0px ;

  width: 100%;

  display: flex;
  align-items: center;
`

export const BackBtn = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;

  background-color: transparent;
  border: none;

  font-family: 'Raleway',sans-serif;
  font-size: 18px;
  color: white;
  text-transform: uppercase;

  cursor: pointer;

  box-shadow: 0px 0px 4px 1px #fff;
  border-radius: 4px;

  margin-right: auto;
  width: 100px;

  transition: 200ms;

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
    width: auto;
  }

  @media screen and (max-width: 400px) {
    top: 8px;
    left: 16px;
  }
`

export const Title = styled.h3`
  position: relative;

  margin-left: auto;
  margin-right: auto;

  font-family: 'Raleway',sans-serif;
  font-weight: 200;
  font-size: 24px;
  color: white;

  &::before {
    content: '';
    position: absolute;
    bottom: -6px;
    right: 0;

    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: #ffffffbb;
    box-shadow: 0px 0px 8px 2px #72a9e5;
  }

  @media screen and (max-width: 400px) {
    font-size: 18px;
    margin-right: 40px;
  }
`

export const Img = styled.img`
  width: 470px;
  height: 280px;

  box-shadow: 0px 0px 8px 1px #97bbe0;
  border-radius: 4px;

  @media screen and (max-width: 988px) {
    width: 420px;
    height: 230px;
  }

  @media screen and (max-width: 652px) {
    width: 370px;
    height: 180px;
  }

  @media screen and (max-width: 475px) {
    width: 230px;
    height: 140px;
  }
`

export const DescriptionP = styled.p`
  margin-top: auto;
  margin-bottom: auto;

  padding: 0 20px;

  font-size: 'Roboto';
  letter-spacing: 0.1em;
  color: #ffffffc1;
  text-align: center;
  font-size: 18px;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }

  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`