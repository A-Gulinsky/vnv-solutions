import { Section } from "components/SharedComponents/Section/Section"
import { Container, Title } from "./SixthBlock.styled"
import { FaqContainer } from "./FAQ/FaqContainer"

export const SixthBlock = () => {

  return (
    
    <Section bgColor={'#000000'}>    
      <Container
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.7, once: true }}
      >
        
        <Title>F.A.Q.</Title>
        <FaqContainer />
        
      </Container>
    </Section>
    
  )
}