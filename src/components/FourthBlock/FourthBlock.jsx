import { Section } from "components/SharedComponents/Section/Section"
import { Container } from "./FourthBlock.styled"
import { ProjectList } from "./ProjectList/ProjectList"

export const FourthBlock = () => {

  return (
    <Section>
      <Container>
        <h2 >Our Projects</h2>

        <ProjectList />

      </Container>
    </Section>
  )
}