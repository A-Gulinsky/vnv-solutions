
// components
import { Section } from "components/SharedComponents/Section/Section"
import { Brief } from "./Brief/Brief"

// emotion
import { Container, Title, Wrapper } from "./SeventhBlock.styled"

export const SeventhBlock = () => {
  
  return (
    <Section>
      <Wrapper>
        <Container>

          <Title>Filling out a brief</Title>
          <Brief />
          
        </Container>
      </Wrapper>
    </Section>
  )
}