import { MobileLinkA, MobileSocialContainer, MobileLinkLi, UpperMobileUl, BottomMobileUl, svgStyle } from "./MobileSocial.styled"

import { FaLinkedinIn,FaTiktok } from 'react-icons/fa'
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'
import { LiaTelegramPlane } from 'react-icons/lia'

export const MobileSocial = () => {

  return (
    <MobileSocialContainer>
      
      <UpperMobileUl>

        <MobileLinkLi>
          <MobileLinkA href="/" style={{filter: 'drop-shadow(0px 0px 6px #095cf5)'}}>
            <FaLinkedinIn style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>

        <MobileLinkLi>
          <MobileLinkA href="/" style={{filter: 'drop-shadow(0px 0px 6px #4009f5)'}}>
            <FaTiktok style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>
      </UpperMobileUl>

      <BottomMobileUl>

        <MobileLinkLi>
          <MobileLinkA href="/" style={{filter: 'drop-shadow(0px 0px 6px #095cf5)'}}>
            <BiLogoFacebook style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>

        <MobileLinkLi>
          <MobileLinkA href="/" style={{filter: 'drop-shadow(0px 0px 6px #095cf5)'}}>
            <LiaTelegramPlane style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>

        <MobileLinkLi>
          <MobileLinkA href="/" style={{filter: 'drop-shadow(0px 0px 6px #f50964)'}}>
            <BiLogoInstagram style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>
      </BottomMobileUl>

    </MobileSocialContainer>
  )
}