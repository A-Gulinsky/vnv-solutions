
// emotion
import { TextContainer, TextP, TextTitle } from "./Text.styled"

// anim
import { textAnim } from "./anim"

export const Text = () => {
  
  return (
    <TextContainer>
      <TextTitle
        variants={textAnim}
        transition={{duration: 1.5}}
      >Have questions ? </TextTitle>
      <TextP
        variants={textAnim}
        transition={{duration: 1.5, delay: 1}}
      >Fill out the form and we will answer you</TextP>
    </TextContainer>
  )
}