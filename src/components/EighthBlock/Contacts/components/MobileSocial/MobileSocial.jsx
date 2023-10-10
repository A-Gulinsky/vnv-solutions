import { MobileLinkA, MobileSocialContainer, MobileLinkLi, UpperMobileUl, BottomMobileUl } from "./MobileSocial.styled"

import { FaLinkedinIn,FaTiktok } from 'react-icons/fa'
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'
import { LiaTelegramPlane } from 'react-icons/lia'

const svgStyle = {
  fill: '#fff',
  width: 30,
  height: 30
}

export const MobileSocial = () => {

  return (
    <MobileSocialContainer>
      
      <UpperMobileUl>

        <MobileLinkLi>
          <MobileLinkA href="/">
            <FaLinkedinIn style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>

        <MobileLinkLi>
          <MobileLinkA href="/">
            <FaTiktok style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>
      </UpperMobileUl>

      <BottomMobileUl>

        <MobileLinkLi>
          <MobileLinkA href="/">
            <BiLogoFacebook style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>

        <MobileLinkLi>
          <MobileLinkA href="/">
            <LiaTelegramPlane style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>

        <MobileLinkLi>
          <MobileLinkA href="/">
            <BiLogoInstagram style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>
      </BottomMobileUl>

    </MobileSocialContainer>
  )
}