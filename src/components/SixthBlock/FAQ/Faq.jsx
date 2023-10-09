import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AnswerContainer, AnswerP, FaqQuestionDiv, FaqQuestionH3 } from "./Faq.styled";

export const Faq = (props) => {
  const { title = 'click me', children } = props
  
  const [isVisible, setVisible] = useState(false)

  const handleClick = () => setVisible(!isVisible)

  return (
    <>
      <FaqQuestionDiv onClick={handleClick}>
        <FaqQuestionH3>{title}</FaqQuestionH3>
      </FaqQuestionDiv>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
            transition={{duration: 0.2}}
          >
            <AnswerContainer
              
            >
              <AnswerP>{children}</AnswerP>
            </AnswerContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}