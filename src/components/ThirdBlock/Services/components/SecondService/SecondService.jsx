
import { ServiceContainer,DescriptionP, Img, Li, P, Ul, UpperDiv, UpperItemsDiv, iconStyle, H3, ButtonIWant } from '../GeneralStyle.styled'
import { animTitle, animDescription, animImg,animLi } from '../AnimSecondVariant'

import photo from 'assets/photo/service-2.png'

import { MdImportantDevices } from 'react-icons/md'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { GiSwordsPower } from 'react-icons/gi'

export const SecondService = () => {

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
            DEVELOPMENT OF A UNIQUE ERP SYSTEM
          </H3>
          <Ul>
            <Li 
              variants={animLi}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.4 }}
            >
              <P>-Everyone Matters</P>
              <MdImportantDevices style={iconStyle} />
            </Li>
            <Li 
              variants={animLi}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.8 }}
            >
              <P>-Leadership is Here To Serve</P>
              <MdOutlineLeaderboard style={iconStyle} />
            </Li>
            <Li 
              variants={animLi}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 1.2 }}
            >
              <P>-Resilient</P>
              <GiSwordsPower style={iconStyle} />
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
      >Developing customized ERP (Enterprise Resource Planning) systems that streamline your' business operations,
        improve communication between departments and automate processes. Our ERP solutions are tailored to the
        unique needs of your business and can be integrated with other software solutions to provide a comprehensive
        business management system.
      </DescriptionP>

    </ServiceContainer>
  )
}