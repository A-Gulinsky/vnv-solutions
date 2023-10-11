
// components
import { Section } from "components/SharedComponents/Section/Section"
import { ContactForm } from "./ContactForm/ContactForm"
import { Text } from "./Text/Text"

// emotion
import { Container, Wrapper, InfoContainer, Title } from "./FifthBlock.styled"

// notification Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const FifthBlock = () => {

  return (
    <Section id='contact'>
      <Wrapper>
        <Container
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.5, once: true }}
        >
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