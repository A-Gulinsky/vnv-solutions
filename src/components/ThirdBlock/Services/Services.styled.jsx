import styled from "@emotion/styled";

import { motion } from "framer-motion";

export const ServicesContainer = styled(motion.div)`

  position: relative;

  width: 80%;
  height: 650px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 40px;

  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 4px;

    background-color: #ffffffbb;
    border-radius: 4px;
    box-shadow: 0px 0px 8px 2px #72a9e5;
  }

  @media screen and (max-width: 820px) {
    height: 620px;
  }

  @media screen and (max-width: 400px) {
    padding: 10px;

    height: 690px;
  }
`