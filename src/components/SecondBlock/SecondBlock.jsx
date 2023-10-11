import { useState } from "react"

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

  const handleItemClick = (id) => {
    setId(id)
    // anim li
    setActiveLi(true)
    
    setTimeout(() => {
      setActiveLi(false)
    }, 1500)
  }

  return (
    <Section bgColor='#000000' id='whyus'>
      <Container
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 1, once: true }}
      >

        <Title
          variants={titleAnim}
          transition={{duration: 1.5}}
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