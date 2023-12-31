import { useState } from "react";

// emotion
import { svgIcon, AnswerContainer, AnswerP, FaqQuestionDiv, FaqQuestionH3 } from "./Faq.styled";

// icon
import { FaArrowUpLong,FaArrowDownLong } from 'react-icons/fa6'

// framer anim
import { motion, AnimatePresence } from "framer-motion";

export const Faq = (props) => {
  const { title = 'click me', children } = props
  
  // isVisible answer div
  const [isVisible, setVisible] = useState(false)

  // if isHovered = true , visible svg arrow
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => setVisible(!isVisible)

  // hover on question div
  const onHoverTest = () => {
    setIsHovered(true)
  }

  // hover off on question div
  const offHoverTest = () => {
    setIsHovered(false)
  }

  return (
    <>
      <FaqQuestionDiv
        onClick={handleClick}
        onMouseEnter={onHoverTest}
        onMouseLeave={offHoverTest}
      >
        <FaqQuestionH3>
          {title}
          {isHovered && !isVisible && <FaArrowUpLong style={svgIcon} />}
          {isVisible && <FaArrowDownLong style={svgIcon} />}
        </FaqQuestionH3>
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