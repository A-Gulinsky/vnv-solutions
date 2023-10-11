import styled from "@emotion/styled"

import { motion } from "framer-motion"

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 90%;
  padding-left: 10px;

  border: 1px solid black;
  border-radius: 4px;

  position: relative;

  transition: 200ms;

  z-index: 10;

  border: 1px solid #615e5e;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 2px 2px #d5d2d24a;
  }
`

export const Input = styled.input`
  display: block;
  width: 100%;

  padding: 8px 8px;

  background-color: transparent;

  font-size: 16px;
  color: #ffffffc6;

  border-radius: 4px;
  border: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  outline: transparent;

  &::placeholder {
    color: white;
  }
`

export const P = styled(motion.p)`
  margin-bottom: 5px;

  font-weight: 600;
  text-align: center;
  color: #c10606;

  position: absolute;
  bottom: -22px;
  left: 0;

  z-index: 5;

  font-size: 12px;
  font-family: 'Roboto',sans-serif;
  letter-spacing: 0.1em;
`
