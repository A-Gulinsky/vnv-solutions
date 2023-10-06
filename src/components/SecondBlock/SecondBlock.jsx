import { Section } from "components/SharedComponents/Section/Section"
import { FeaturesBox } from "./FeaturesBox/FeaturesBox"
import { FeaturesList } from "./FeaturesList/FeaturesList"
import { useState } from "react"
import { Container } from "./SecondBlock.styled"

export const SecondBlock = () => {

  const [id, setId] = useState(0)
  const [activeLi, setActiveLi] = useState(false)

  const handleItemClick = (id) => {
    setId(id)
    console.log(id)
    // anim li
    setActiveLi(true)
    
    setTimeout(() => {
      setActiveLi(false)
    }, 4000)
  }

  return (
    <Section bgColor='#858585'>
      <Container>
        <FeaturesBox id={id} activeLi={activeLi} />
        <FeaturesList handleItemClick={handleItemClick} activeLi={activeLi} />
      </Container>
    </Section>
  )
}