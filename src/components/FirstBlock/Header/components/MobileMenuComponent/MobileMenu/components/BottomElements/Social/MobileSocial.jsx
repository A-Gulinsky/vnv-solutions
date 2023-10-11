import { MobileLinkA, MobileSocialContainer, MobileLinkLi, UpperMobileUl, BottomMobileUl, svgStyle } from "./MobileSocial.styled"

import { FaLinkedinIn,FaTiktok } from 'react-icons/fa'
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'
import { LiaTelegramPlane } from 'react-icons/lia'

export const MobileSocial = () => {

  return (
    <MobileSocialContainer>
      
      <UpperMobileUl>

        <MobileLinkLi>
          <MobileLinkA
            href="https://www.linkedin.com/company/vnv-tech/"
            rel="noreferrer nofollow noopener"
            target="_blank"
            style={{filter: 'drop-shadow(0px 0px 6px #095cf5)'}}
          >
            <FaLinkedinIn style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>

        <MobileLinkLi>
          <MobileLinkA
            href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1"
            rel="noreferrer nofollow noopener"
            target="_blank"
            style={{filter: 'drop-shadow(0px 0px 6px #4009f5)'}}
          >
            <FaTiktok style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>
      </UpperMobileUl>

      <BottomMobileUl>

        <MobileLinkLi>
          <MobileLinkA
            style={{ filter: 'drop-shadow(0px 0px 6px #095cf5)' }}
            href="https://www.facebook.com/people/VNV-Solutions/100088433736254/"
            rel="noreferrer nofollow noopener"
            target="_blank"
          >
            <BiLogoFacebook style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>

        <MobileLinkLi>
          <MobileLinkA
            style={{ filter: 'drop-shadow(0px 0px 6px #095cf5)' }}
            href="https://t.me/vnv_solutions"
            rel="noreferrer nofollow noopener"
            target="_blank"
          >
            <LiaTelegramPlane style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>

        <MobileLinkLi>
          <MobileLinkA
            style={{ filter: 'drop-shadow(0px 0px 6px #f50964)' }}
            href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D"
            rel="noreferrer nofollow noopener"
            target="_blank"
          >
            <BiLogoInstagram style={svgStyle} />
          </MobileLinkA>
        </MobileLinkLi>
      </BottomMobileUl>

    </MobileSocialContainer>
  )
}