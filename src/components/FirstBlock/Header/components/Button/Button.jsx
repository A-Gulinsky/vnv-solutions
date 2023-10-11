// emotion
import { ButtonStyled } from "./Button.styled"

export const OrderButton = ({cssPadding}) => {

  return (
    <ButtonStyled padding={cssPadding} type="button">Order now</ButtonStyled>
  )
}