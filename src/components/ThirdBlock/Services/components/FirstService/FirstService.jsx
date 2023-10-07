
import photo from 'assets/photo/service-1.png'

import { ServiceContainer,DescriptionP, H3, Img, Li, P, Ul, UpperDiv, UpperItemsDiv } from '../GeneralStyle.styled'

import { MdOutlineHighQuality } from 'react-icons/md'
import { FaShippingFast } from 'react-icons/fa'
import { BiLeaf } from 'react-icons/bi'

// ICON STYLE
const iconStyle = {
  fill: '#fff',
  width: 20,
  height: 20,
  filter: 'drop-shadow(rgb(78, 160, 246) 0px 0px 15px)'
}


export const FirstService = () => {

  return (
    <ServiceContainer>
      
      <UpperDiv>
        <UpperItemsDiv>
          <H3>SOFTWARE DEVELOPMENT</H3>
          <Ul>
            <Li>
              <P>-Qualitatively</P>
              <MdOutlineHighQuality style={iconStyle} />
            </Li>
            <Li>
              <P>-Fast</P>
              <FaShippingFast style={iconStyle} />
            </Li>
            <Li>
              <P>-Promising</P>
              <BiLeaf style={iconStyle} />
            </Li>
          </Ul>
          <button type="button">I WANT</button>
        </UpperItemsDiv>

        <Img src={photo} alt="img" />
      </UpperDiv>

      <DescriptionP>Our software is aiming to solve your business problems and meet specific business needs.
        Our experienced team can develop software for a wide range of industries and applications,
        especially agriculture, finance, healthcare, and logistics, among others.
        Our goal is to deliver high-quality software that will solve your business tasks and problems,
        and optimize your working processes to help your business grow.
      </DescriptionP>
      
    </ServiceContainer>
  )
}