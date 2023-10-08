import { Section } from "components/SharedComponents/Section/Section"
import { Container, Title } from "./FourthBlock.styled"
import { ProjectList } from "./ProjectList/ProjectList"

export const FourthBlock = () => {

  return (
    <Section bgColor={'#000000'}>
      <Container>
        <Title>Our Projects</Title>

        <ProjectList />

      </Container>
    </Section>
  )
}