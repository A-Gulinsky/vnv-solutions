
import { ServiceContainer,DescriptionP, Img, Li, P, Ul, UpperDiv, UpperItemsDiv, iconStyle, H3 } from '../GeneralStyle.styled'
import { animTitle, animDescription, animImg,animLi } from '../AnimSecondVariant'

import photo from 'assets/photo/service-6.png'

import { GiSkills } from 'react-icons/gi'
import { GiClassicalKnowledge } from 'react-icons/gi'
import { SlLike } from 'react-icons/sl'

export const SixthService = () => {

  return (
    <ServiceContainer>

      <UpperDiv flexDir='row-reverse'>
        <UpperItemsDiv>
          <H3
            variants={animTitle}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}

            width={'250px'}
          >
            WEBSITE TRANSFERRING
          </H3>
          <Ul>
            <Li 
              variants={animLi}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.4 }}
            >
              <P>-Skills</P>
              <GiSkills style={iconStyle} />
            </Li>
            <Li 
              variants={animLi}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.8 }}
            >
              <P>-Experience</P>
              <GiClassicalKnowledge style={iconStyle} />
            </Li>
            <Li 
              variants={animLi}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 1.2 }}
            >
              <P>-Result</P>
              <SlLike style={iconStyle} />
            </Li>
          </Ul>
          <button type="button">I WANT</button>
        </UpperItemsDiv>

        <Img
          initial='hidden'
          animate='visible'
          transition={{ duration: 1}}
          variants={animImg}

          src={photo}
          alt="img" />
      </UpperDiv>

      <DescriptionP
        variants={animDescription}
        initial='hidden'
        animate='visible'
        transition={{ duration: 1 }}
      >
        We offer website transferring services for clients who want to move their website from one platform to another.
        Our team of developers can ensure that the transition is smooth and seamless, and that the website remains fully
        functional throughout the process. Our goal is to minimize any disruptions to our clients' online presence and
        ensure that their website continues to meet their business needs.
      </DescriptionP>

    </ServiceContainer>
  )
}