// emotion
import { Container, H1 } from "./Title.styled"

// component
import { OrderButton } from "../Header/components/Button/Button"

export const Title = () => {

  return (
    <Container>
      <H1>Easy, quality, IT - winning solutions for your business</H1>
      <OrderButton cssPadding={'10px 30px'} />
    </Container>
  )
}