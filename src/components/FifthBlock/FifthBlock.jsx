import { Section } from "components/SharedComponents/Section/Section"
import { Container, Wrapper, InfoContainer, Title } from "./FifthBlock.styled"
import { ContactForm } from "./ContactForm/ContactForm"
import { Text } from "./Text/Text"

export const FifthBlock = () => {

  return (
    <Section>
      <Wrapper>
        <Container>
          <Title>CONTACT US</Title>
        
          <InfoContainer>
            <Text />
            <ContactForm />
          </InfoContainer>

        </Container>
      </Wrapper>
    </Section>
  )
}