import { MobileButtonStyled, svgStyle } from "./MobileButton.styled"

import { HiMenu } from 'react-icons/hi'

export const MobileButton = ({handleMobileMenuClick}) => {

  return (
    <MobileButtonStyled 
      type="button"
      onClick={handleMobileMenuClick}
    >
      <HiMenu style={svgStyle}/>
    </MobileButtonStyled>
  )
}