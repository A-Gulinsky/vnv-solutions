
// emotion
import { AdvantageDescription, AdvantageTitle, DataContainer, DescriptionDataContainer, FeaturesBoxStyled, MotionDataContainer } from "./FeaturesBox.styled"

// data
import advantages from '../../../data/features.json'

// anim
import { firstAnim, changeAnim } from "./anim";

// props
import PropTypes from 'prop-types'

// component
import { FeaturesIcons } from "./FeaturesIcons";

export const FeaturesBox = ({id, activeLi}) => {

  return (
    <FeaturesBoxStyled variants={firstAnim} transition={{duration: 2}}> 
      
      {activeLi ?
        <MotionDataContainer
          variants={changeAnim}
          initial='hidden'
          animate='visible'
          transition={{delay: 1}}
        >
          <DescriptionDataContainer>

            <AdvantageTitle>{advantages[id].advantage}</AdvantageTitle>
            <FeaturesIcons id={id} />

          </DescriptionDataContainer>
  
          <AdvantageDescription>{advantages[id].description}</AdvantageDescription>
          
        </MotionDataContainer>
        
        : (
          <DataContainer>
            <DescriptionDataContainer>

              <AdvantageTitle>{advantages[id].advantage}</AdvantageTitle>
              <FeaturesIcons id={id} />

            </DescriptionDataContainer>
            
            <AdvantageDescription>{advantages[id].description}</AdvantageDescription>

          </DataContainer>
        )}

    </FeaturesBoxStyled>
  )
}


FeaturesBox.propTypes = {
  id: PropTypes.number,
  activeLi: PropTypes.bool
}
