import { MobileButtonStyled } from "./MobileButton.styled"

export const MobileButton = ({handleMobileMenuClick}) => {

  return (
    <MobileButtonStyled 
      type="button"
      onClick={handleMobileMenuClick}
    >
      MENU
    </MobileButtonStyled>
  )
}