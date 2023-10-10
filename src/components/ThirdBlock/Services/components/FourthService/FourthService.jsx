
import { ServiceContainer,DescriptionP, Img, Li, P, Ul, UpperDiv, UpperItemsDiv, iconStyle, H3, ButtonIWant } from '../GeneralStyle.styled'
import { animTitle, animDescription, animImg,animLi } from '../AnimSecondVariant'

import photo from 'assets/photo/service-4.png'

import { MdPhoneInTalk } from 'react-icons/md'
import { MdScheduleSend } from 'react-icons/md'
import { PiListMagnifyingGlassThin } from 'react-icons/pi'

export const FourthService = () => {

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
            SUPPORT AND UPDATES
          </H3>
          <Ul>
            <Li
              variants={animLi}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.4 }}
            >
              <P>-Communication</P>
              <MdPhoneInTalk style={iconStyle} />
            </Li>
            <Li 
              variants={animLi}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.8 }}
            >
              <P>-Improvement</P>
              <MdScheduleSend style={iconStyle} />
            </Li>
            <Li 
              variants={animLi}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 1.2 }}
            >
              <P>-Expertise</P>
              <PiListMagnifyingGlassThin style={iconStyle} />
            </Li>
          </Ul>
          <ButtonIWant type="button">I WANT</ButtonIWant>
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
        We offer ongoing support and updates to ensure that your software solutions remain up-to-date and fully
        functional. Our support team is always ready to fix any issues or concerns that arise, so we provide regular
        updates to improve performance and add new features if needed. Our goal is to provide our clients with peace
        of mind and ensure that their software solutions continue to meet their needs over time.
      </DescriptionP>

    </ServiceContainer>
  )
}