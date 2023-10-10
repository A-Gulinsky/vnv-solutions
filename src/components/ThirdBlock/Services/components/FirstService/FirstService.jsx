
import photo from 'assets/photo/service-1.png'

import { ServiceContainer,DescriptionP, Img, Li, P, Ul, UpperDiv, UpperItemsDiv, iconStyle, H3, ButtonIWant } from '../GeneralStyle.styled'
import { animTitle, animDescription, animImg,animLi } from '../AnimFirstVariant'

import { MdOutlineHighQuality } from 'react-icons/md'
import { FaShippingFast } from 'react-icons/fa'
import { BiLeaf } from 'react-icons/bi'

export const FirstService = () => {

  return (
    <ServiceContainer>
      
      <UpperDiv flexDir='row'>
        <UpperItemsDiv>
          <H3
            initial='hidden'
            animate='visible'
            variants={animTitle}
            transition={{ duration: 1 }}
          >
            SOFTWARE DEVELOPMENT
          </H3>
          <Ul>
            <Li
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.4}}
              variants={animLi}             
            >
              <P>-Qualitatively</P>
              <MdOutlineHighQuality style={iconStyle} />
            </Li>
            <Li
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.8}}
              variants={animLi}
            >
              <P>-Fast</P>
              <FaShippingFast style={iconStyle} />
            </Li>
            <Li
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 1.2}}
              variants={animLi}
            >
              <P>-Promising</P>
              <BiLeaf style={iconStyle} />
            </Li>
          </Ul>
          <ButtonIWant type="button">I WANT</ButtonIWant>
        </UpperItemsDiv>

        <Img
          variants={animImg}
          initial='hidden'
          animate='visible'
          transition={{ duration: 1 }}
          src={photo}
          alt="img"
        />
      </UpperDiv>

      <DescriptionP
        variants={animDescription}
        initial='hidden'
        animate='visible'
        transition={{ duration: 1}}
      >
        Our software is aiming to solve your business problems and meet specific business needs.
        Our experienced team can develop software for a wide range of industries and applications,
        especially agriculture, finance, healthcare, and logistics, among others.
        Our goal is to deliver high-quality software that will solve your business tasks and problems,
        and optimize your working processes to help your business grow.
      </DescriptionP>
      
    </ServiceContainer>
  )
}