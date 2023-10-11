// components
import { Section } from "components/SharedComponents/Section/Section"
import { Services } from "./Services/Services"

// emotion
import { Container, Title } from "./ThirdBlock.styled"

export const ThirdBlock = () => {
  
  return (
    <Section bgColor={'#000000'} id='services'>
      <Container>
        
        <Title>Services</Title>
        <Services />

      </Container>
    </Section>
  )
}