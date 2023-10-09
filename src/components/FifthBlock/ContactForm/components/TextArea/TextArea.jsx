import { TextAreaContainer, TextAreaStyled, TextAreaTitle } from "./TextArea.styled"

export const TextArea = ({register , errors}) => {
  
  return (
    <TextAreaContainer>
      <TextAreaTitle>Your Message</TextAreaTitle>
      <TextAreaStyled
        autoComplete="off"
        {...register("message", { required: "Message is required" })}
        style={{ borderColor: errors.message ? 'red' : 'initial' }}
        placeholder="Your message"
      />
    </TextAreaContainer>
  )
}