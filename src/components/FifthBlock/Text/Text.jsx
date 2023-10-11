import { TextContainer, TextP, TextTitle } from "./Text.styled"

const testAnim = {
  hidden: {
    opacity: 0,
    x: -80
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

export const Text = () => {
  
  return (
    <TextContainer>
      <TextTitle
        variants={testAnim}
        transition={{duration: 1.5}}
      >Have questions ? </TextTitle>
      <TextP
        variants={testAnim}
        transition={{duration: 1.5, delay: 1}}
      >Fill out the form and we will answer you</TextP>
    </TextContainer>
  )
}