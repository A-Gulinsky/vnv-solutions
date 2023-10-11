import styled from "@emotion/styled";

import { motion } from "framer-motion";

import theme2 from '../../assets/photo/theme-2.jpg'

export const Container = styled(motion.div)`
  max-width: 1170px;
  padding: 0px 15px;
  margin: 0 auto;

`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 80px 0;

  @media screen and (max-width: 730px) {
    flex-direction: column;
    gap: 40px;
  }
`

export const Wrapper = styled.div`
  background-image: url(${theme2});

  background: 
    linear-gradient(180deg,#000000 0%, rgba(0,255,0,0) 80%),
    linear-gradient(0deg,#000000 0%, rgba(0,255,0,0) 80%),
    url(${theme2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Title = styled(motion.h2)`
  text-align: left;
  margin-left: 40px;
  padding: 10px 0 10px 0;

  font-family: 'Raleway', sans-serif;
  font-weight: 200;
  font-size: 40px;
  color: #ffffffbb;

  @media screen and (max-width: 790px) {
    margin-left: 0;
    text-align: center;
  }
`