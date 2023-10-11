// emotion
import { Container, Video } from "./VideoContainer.styled"

// Background video 
import videoBg from 'assets/video/videoBg.mp4'

export const VideoContainer = ({ children }) => {
  
  return (
    <Container>
      
      <Video autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </Video>
      
      {children}
    </Container>
  )
}