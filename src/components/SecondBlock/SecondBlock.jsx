import { useState, useEffect } from "react"

// components
import { Section } from "components/SharedComponents/Section/Section"
import { FeaturesBox } from "./FeaturesBox/FeaturesBox"
import { FeaturesList } from "./FeaturesList/FeaturesList"

// emotion
import { Container, ItemContainer, Title } from "./SecondBlock.styled"

// anim
import { titleAnim } from "./anim"

export const SecondBlock = () => {

  const [id, setId] = useState(0)
  const [activeLi, setActiveLi] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);


  const handleItemClick = (id) => {
    setId(id)
    // anim li
    setActiveLi(true)
    
    setTimeout(() => {
      setActiveLi(false)
    }, 1500)
  }

  // 
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
    <Section bgColor='#000000' id='whyus'>
      <Container
        initial={viewportWidth > 879 ? 'hidden' : ''}
        whileInView={viewportWidth > 879 ? 'visible' : ''}
        viewport={{ amount: viewportWidth > 879 ? 1 : 0, once: true }}
      >

        <Title
          variants={viewportWidth > 879 ? titleAnim : {}}
          transition={{ duration: viewportWidth > 879 ? 1.5 : 0 }}
        >
          Why Us ?
        </Title>

        <ItemContainer>
          <FeaturesBox
            id={id}
            activeLi={activeLi}
          />
          <FeaturesList handleItemClick={handleItemClick} activeLi={activeLi} />
        </ItemContainer>

      </Container>
    </Section>
  )
}