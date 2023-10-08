import { Container, Video } from "./VideoContainer.styled"

import videoBg from 'assets/video/videoBg.mp4'

export const VideoContainer = ({ children }) => {
  
  return (
    <Container>
      
      <Video src={videoBg} autoPlay loop muted />
      
      {children}
    </Container>
  )
}