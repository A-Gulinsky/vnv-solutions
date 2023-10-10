import { AdvantageDescription, AdvantageTitle, DataContainer, DescriptionDataContainer, FeaturesBoxStyled, MotionDataContainer } from "./FeaturesBox.styled"

import advantages from '../../../data/features.json'

import { GoGear, GoChecklist } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";

// left Block Anim
const testAnim4 = {
  hidden: {
    x: -80,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

export const FeaturesBox = ({id, activeLi}) => {

  const testAnim = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  }

  return (
    <FeaturesBoxStyled
      variants={testAnim4}
      transition={{duration: 2}}
    > 
      {activeLi ?
        <MotionDataContainer
          variants={testAnim}
          initial='hidden'
          animate='visible'
          transition={{delay: 1}}
        >
          <DescriptionDataContainer>
            <AdvantageTitle>{advantages[id].advantage}</AdvantageTitle>
            {advantages[id].id === 1 && <FaRegHandshake style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
            {advantages[id].id === 2 && <GoGear style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
            {advantages[id].id === 3 && <IoIosTimer style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
            {advantages[id].id === 4 && <GoChecklist style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
            {advantages[id].id === 5 && <MdOutlineDesignServices style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
            {advantages[id].id === 6 && <GiMagnifyingGlass style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
          </DescriptionDataContainer>
            <AdvantageDescription>{advantages[id].description}</AdvantageDescription>
          
        </MotionDataContainer>
        
        : (
          <DataContainer>
            <DescriptionDataContainer>
              <AdvantageTitle>{advantages[id].advantage}</AdvantageTitle>
              {advantages[id].id === 1 && <FaRegHandshake style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
              {advantages[id].id === 2 && <GoGear style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
              {advantages[id].id === 3 && <IoIosTimer style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
              {advantages[id].id === 4 && <GoChecklist style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
              {advantages[id].id === 5 && <MdOutlineDesignServices style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
              {advantages[id].id === 6 && <GiMagnifyingGlass style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
            </DescriptionDataContainer>
            
            <AdvantageDescription>{advantages[id].description}</AdvantageDescription>

          </DataContainer>
        )}

    </FeaturesBoxStyled>
  )
}