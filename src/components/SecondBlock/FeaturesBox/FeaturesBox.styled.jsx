import styled from "@emotion/styled";

import { motion } from "framer-motion";

export const FeaturesBoxStyled = styled.div`
  border: 2px solid black;
  width: 450px;
  height: 400px;
`

export const DataContainer = styled.div`  
  display: flex;
  justify-content: space-between;

  padding: 40px;
`

export const MotionDataContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  padding: 40px;
`

export const DescriptionDataContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`

export const AdvantageTitle = styled.h3`
  text-align: center;
`

export const AdvantageDescription = styled.b`
  text-align: center;
`