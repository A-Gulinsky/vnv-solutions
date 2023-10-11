// emotion
import { Container, Wrapper } from "./FirstBlock.styled"

// components
import { VideoContainer } from "./VideoContainer/VideoContainer"
import { Header } from "./Header/Header"
import { Title } from "./Title/Title"

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