// emotion
import { HeaderStyled } from "./Header.styled"

// components
import { OrderButton } from "./components/Button/Button"
import { Logo } from "./components/Logo/Logo"
import { MobileMenuComponent } from "./components/MobileMenuComponent/MobileMenuComponent"
import { NavMenu } from "./components/NavMenu/NavMenu"

export const Header = () => {

  return (
    <HeaderStyled>

      <Logo />
      <NavMenu />
      <OrderButton cssPadding={'7px 15px'} />

      {/* mobile menu */}
      <MobileMenuComponent />
      
    </HeaderStyled>
  )
}