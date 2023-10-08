import { Section } from "components/SharedComponents/Section/Section"
import { Container, Title } from "./ThirdBlock.styled"
import { Services } from "./Services/Services"

export const ThirdBlock = () => {
  
  return (
    <Section bgColor={'#000000'}>
      <Container>
        <Title>Services</Title>

        <Services />
      </Container>
    </Section>
  )
}