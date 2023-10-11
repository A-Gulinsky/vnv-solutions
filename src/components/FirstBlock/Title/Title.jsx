// emotion
import { Container, H1 } from "./Title.styled"

// component
import { DeskButtonStyled } from "../Header/components/Button/Button.styled"

export const Title = () => {

  return (
    <Container>
      <H1>Easy, quality, IT - winning solutions for your business</H1>
      <DeskButtonStyled padding={'10px 30px'}>
        Order Now
      </DeskButtonStyled>
    </Container>
  )
}