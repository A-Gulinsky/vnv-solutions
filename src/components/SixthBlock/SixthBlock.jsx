import { useState, useEffect } from "react"

// components
import { Section } from "components/SharedComponents/Section/Section"
import { FaqContainer } from "./FAQ/FaqContainer"

// emotion
import { Container, Title } from "./SixthBlock.styled"

export const SixthBlock = () => {

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    
    <Section bgColor={'#000000'}>    
      <Container
        initial={viewportWidth > 879 ? 'hidden' : ''}
        whileInView={viewportWidth > 879 ? 'visible' : ''}
        viewport={{ amount: viewportWidth > 879 ? 0.7 : 0, once: true }}
      >
        
        <Title>F.A.Q.</Title>
        <FaqContainer />
        
      </Container>
    </Section>
    
  )
}