import { OrderButton } from "./components/Button/Button"
import { Logo } from "./components/Logo/Logo"
import { MobileMenuComponent } from "./components/MobileMenuComponent/MobileMenuComponent"

import { NavMenu } from "./components/NavMenu/NavMenu"
import { HeaderStyled } from "./Header.styled"


export const Header = () => {

  

  return (
    <HeaderStyled>
      <Logo />
      <NavMenu />
      <OrderButton />

      {/* mobile menu */}
      <MobileMenuComponent />
    </HeaderStyled>
  )
}