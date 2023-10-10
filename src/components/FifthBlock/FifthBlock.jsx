import { Section } from "components/SharedComponents/Section/Section"
import { Container, Wrapper, InfoContainer, Title } from "./FifthBlock.styled"
import { ContactForm } from "./ContactForm/ContactForm"
import { Text } from "./Text/Text"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

          <ToastContainer theme="colored" autoClose={3000} />
        </Container>
      </Wrapper>
    </Section>
  )
}