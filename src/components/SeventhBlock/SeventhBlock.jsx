import { Section } from "components/SharedComponents/Section/Section"
import { Container, Title, Wrapper } from "./SeventhBlock.styled"
import { Brief } from "./Brief/Brief"

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