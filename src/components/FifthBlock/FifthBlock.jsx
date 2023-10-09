import { Section } from "components/SharedComponents/Section/Section"
import { Container } from "./FifthBlock.styled"
import { ContactForm } from "./ContactForm/ContactForm"

export const FifthBlock = () => {

  return (
    <Section>
      <Container>
        <h2>CONTACT US</h2>
        
        <ContactForm />

      </Container>
    </Section>
  )
}