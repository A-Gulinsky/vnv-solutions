

import photo from 'assets/photo/service-3.png'

import { ServiceContainer,DescriptionP, Img, Li, P, Ul, UpperDiv, UpperItemsDiv, iconStyle, H3 } from '../GeneralStyle.styled'
import { animTitle, animDescription, animImg,animLi } from '../AnimFirstVariant'

import { BsArrowUpRight } from 'react-icons/bs'
import { MdOutlineHighQuality } from 'react-icons/md'
import { AiOutlineSchedule } from 'react-icons/ai'

export const ThirdService = () => {

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
            ONLINE-STORE DEVELOPMENT
          </H3>
          <Ul>
            <Li
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.4}}
              variants={animLi}             
            >
              <P>-Continuous improvements</P>
              <BsArrowUpRight style={iconStyle} />
            </Li>
            <Li
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.8}}
              variants={animLi}
            >
              <P>-Quality</P>
              <MdOutlineHighQuality style={iconStyle} />
            </Li>
            <Li
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 1.2}}
              variants={animLi}
            >
              <P>-Efficiency</P>
              <AiOutlineSchedule style={iconStyle} />
            </Li>
          </Ul>
          <button type="button">I WANT</button>
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
        We offer online-store development services for clients who want to create an online presence for their business.
        Our team can build and design a customized e-commerce website that is easy to use and provides
        a seamless user experience. Our goal is to help you increase your online sales, expand customer base,
        and improve overall business performance. Deep understanding and large experience allows us to build
        the most conversional online-stores for you.
      </DescriptionP>
      
    </ServiceContainer>
  )
}