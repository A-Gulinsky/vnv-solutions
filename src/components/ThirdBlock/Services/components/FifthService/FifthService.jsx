
import photo from 'assets/photo/service-5.png'

import { ServiceContainer,DescriptionP, Img, Li, P, Ul, UpperDiv, UpperItemsDiv, iconStyle, H3, ButtonIWant } from '../GeneralStyle.styled'
import { animTitle, animDescription, animImg,animLi } from '../AnimFirstVariant'

import { GiAutomaticSas } from 'react-icons/gi'
import { SiFuturelearn } from 'react-icons/si'
import { MdOutlineHighQuality } from 'react-icons/md'

export const FifthService = () => {

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
            BOT DEVELOPMENT
          </H3>
          <Ul>
            <Li
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.4}}
              variants={animLi}             
            >
              <P>-Automation</P>
              <GiAutomaticSas style={iconStyle} />
            </Li>
            <Li
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.8}}
              variants={animLi}
            >
              <P>-Innovation</P>
              <SiFuturelearn style={iconStyle} />
            </Li>
            <Li
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 1.2}}
              variants={animLi}
            >
              <P>-Quality</P>
              <MdOutlineHighQuality style={iconStyle} />
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
        We specialize in developing customized bots that can automate tasks and improve efficiency.
        We can create bots for a wide range of applications, including customer service, social media,
        and sales, among others. Our goal is to provide you with cutting-edge technology that improves their
        productivity and enhances their customer experience.
      </DescriptionP>
      
    </ServiceContainer>
  )
}