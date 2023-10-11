
// components
import { Section } from "components/SharedComponents/Section/Section"
import { ProjectList } from "./ProjectList/ProjectList"

// emotion
import { Container, Title } from "./FourthBlock.styled"

export const FourthBlock = () => {

  return (
    <Section bgColor={'#000000'} id='projects'>
      <Container>

        <Title>Our Projects</Title>
        <ProjectList />

      </Container>
    </Section>
  )
}