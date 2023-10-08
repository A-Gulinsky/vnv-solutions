import { Container } from "./FirstBlock.styled"
import { Header } from "./Header/Header"
import { Title } from "./Title/Title"
import { VideoContainer } from "./VideoContainer/VideoContainer"

export const FirstBlock = () => {

  return (
    <VideoContainer>
      <Container>
        <Header />
        <Title />
      </Container>
    </VideoContainer>
  )
}