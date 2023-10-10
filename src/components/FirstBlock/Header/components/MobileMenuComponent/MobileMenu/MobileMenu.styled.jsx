import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ParentMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`

export const MobileMenuContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #000000;
  overflow: hidden;

  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`