import { useState } from "react"

// emotion
import { svgStyle, Img, ImgContainer, Item, ItemH3, ItemTypeB, ItemTypeLi, ItemTypeP, ItemTypeUl, ProjectBox, SpanH3, Ul } from "./ProjectList.styled"

// img / svg
import photo from 'assets/photo/project-3.png'
import {ReactComponent as Svg} from 'assets/photo/project-2.svg'
import { CiDeliveryTruck } from 'react-icons/ci'
import { MdOutlineDesignServices } from 'react-icons/md'
import { LiaStoreSolid } from 'react-icons/lia'

// data
import projects from 'data/projects.json'

// components
import { ActiveInfoBlock } from "./ActiveInfoBlock/ActiveInfoBlock"

export const ProjectList = () => {

  const [activeInfo, setActiveInfo] = useState(false)
  const [activeIdx, setActiveIdx] = useState(1)
  const [openAnim, setOpenAnim] = useState(false)

  const handleBtnClick = (idx) => {
    setActiveInfo(true)
    setActiveIdx(idx)

    setOpenAnim(true)
  }

  const handleBtnBack = () => {
    setOpenAnim(false)

    setTimeout(() => {
      setActiveInfo(false)
    }, 300)
  }

  return (
    <ProjectBox>

      {!activeInfo && <Ul>
        {projects.map(({project, type, id}, idx) => (
          <li key={idx}>
          <Item type="button" onClick={() => handleBtnClick(idx + 1)}>
              <ImgContainer>
              {id === 1 && <ItemH3><SpanH3>VOLSTINY</SpanH3> PROD.</ItemH3>}
              {id === 2 && <Svg style={{width: '100%', height: 90, rotate: '354deg'}} />}
              {id === 3 && <Img src={photo} alt="project logo"/>}
            </ImgContainer>
            <ItemTypeUl>
                <li>
                  <ItemTypeB>{project}</ItemTypeB>
                </li>
                <ItemTypeLi>
                  <ItemTypeP>{type}</ItemTypeP>
                  {type === 'Delivery Service' && <CiDeliveryTruck style={svgStyle} />}
                  {type === 'Web-Service' && <MdOutlineDesignServices style={svgStyle} />}
                  {type === 'Marketplace' && <LiaStoreSolid style={svgStyle} />}
                </ItemTypeLi>
            </ItemTypeUl>
          </Item>
        </li>
        ))}
      </Ul>}

      {activeInfo &&
        <ActiveInfoBlock
          handleBtnBack={handleBtnBack}
          projects={projects}
          activeIdx={activeIdx}
          openAnim={openAnim}
        />}
    </ProjectBox>
  )
}