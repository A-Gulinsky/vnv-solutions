import { Section } from "components/SharedComponents/Section/Section"
import { FeaturesBox } from "./FeaturesBox/FeaturesBox"
import { FeaturesList } from "./FeaturesList/FeaturesList"
import { useState } from "react"
import { Container, ItemContainer, Title } from "./SecondBlock.styled"

import { motion, reverseEasing } from "framer-motion"

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

  const testAnim = {
    hidden: {
      opacity: 0.2,
      x: 0,
      y: 0
    },
    visible: {
      opacity: 1,
      x: 500,
      y: 170,
      rotate: '180deg'
    }
  }
  const testAnim2 = {
    hidden: {
      opacity: 0.2,
      x: 0,
      y: 0
    },
    visible: {
      opacity: 1,
      x: 300,
      y: 150,
      rotate: '100deg'
    }
  }

  return (
    <Section bgColor='#000000'>
      <Container>
        <Title>Why Us ?</Title>
        <ItemContainer>
          <FeaturesBox id={id} activeLi={activeLi} />
          <FeaturesList handleItemClick={handleItemClick} activeLi={activeLi} />
        </ItemContainer>

        {/* TEST */}
        
        <motion.div
          style={{
            fontFamily: 'Raleway',
            fontWeight: 200,
            fontSize: 40,
            color: 'white',
            position: 'absolute',
            top: '0',
            left: '0',
            pointerEvents: 'none'
          }}
          initial="hidden"
          animate={['visible']}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: 'reverse'
          }}

          variants={testAnim}
        >
          ?
        </motion.div>
        
        <motion.div
          style={{
            fontFamily: 'Raleway',
            fontWeight: 200,
            fontSize: 40,
            color: 'white',
            position: 'absolute',
            bottom: '40%',
            left: '40%',
            pointerEvents: 'none'
          }}
          initial="hidden"
          animate={['visible']}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: 'reverse'
          }}

          variants={testAnim2}
        >
          ?
        </motion.div>

        
      </Container>
    </Section>
  )
}