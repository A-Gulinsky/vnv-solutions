import { ActiveInfoContainer, AdditionalContainer, BackBtn, Img, Title, DescriptionP } from "./ActiveInfoBlock.styled"

import projectImgOne from 'assets/photo/project-img-1.png'
import projectImgTwo from 'assets/photo/project-img-2.png'
import projectImgThree from 'assets/photo/project-img-3.png'

export const ActiveInfoBlock = ({activeIdx,handleBtnBack,projects,openAnim}) => {

  const infoAnimOpen = {
    hidden: {
      y: '-110%',
      
    },
    visible: {
      y: 0,
      
    }
  }

  const infoAnimClose = {
    hidden: {
      y: 0,
      
    },
    visible: {
      y: '-110%',
      
    }
  }

  return (
   
    <ActiveInfoContainer
      variants={openAnim ? infoAnimOpen : infoAnimClose}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.3 }}
    >
      {activeIdx &&
        <>
          <AdditionalContainer>
            <BackBtn type="button" onClick={handleBtnBack}>Back</BackBtn>
            <Title>{projects[activeIdx - 1].project}</Title>
          </AdditionalContainer>
            {activeIdx === 1 && <Img src={projectImgOne} alt="project img" />}
            {activeIdx === 2 && <Img src={projectImgTwo} alt="project img" />}
            {activeIdx === 3 && <Img src={projectImgThree} alt="project img" />}
          <DescriptionP>{projects[activeIdx - 1].description}</DescriptionP>
        </>
      }
    </ActiveInfoContainer>
  )
}