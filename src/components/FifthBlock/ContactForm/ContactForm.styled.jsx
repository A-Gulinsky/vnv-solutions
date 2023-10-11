import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 300px;
  padding: 25px;

  background-color: #000000d4;
  border: 1px solid #615e5e;
  border-radius: 4px;

  @media screen and (max-width: 380px) {
    width: 280px;
    padding: 25px 10px;
  }
`

export const P = styled.p`
  margin-bottom: 5px;

  font-weight: 600;
  text-align: center;
  color: #064ec1;
`

export const Button = styled.input`
  padding: 10px 40px;

  color: #ffffffdc;

  background-color: transparent;
  border: 1px solid #ecebebe5;
  border-radius: 4px;

  transition: 150ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.06);
  }
`