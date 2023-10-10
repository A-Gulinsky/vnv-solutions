import { Container, Wrapper } from "./FirstBlock.styled"
import { Header } from "./Header/Header"
import { Title } from "./Title/Title"
import { VideoContainer } from "./VideoContainer/VideoContainer"

export const FirstBlock = () => {

  return (
    <VideoContainer>
      <Wrapper>
        <Container>
          <Header />
          <Title />
        </Container>
      </Wrapper>
    </VideoContainer>
  )
}