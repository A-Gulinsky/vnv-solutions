import { Section } from "components/SharedComponents/Section/Section"
import { Container } from "./ThirdBlock.styled"
import { Services } from "./Services/Services"

export const ThirdBlock = () => {
  
  return (
    <Section bgColor={'#454545'}>
      <Container>
        <h2>Services</h2>

        <Services />
      </Container>
    </Section>
  )
}