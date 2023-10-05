import { OrderButton } from "components/SharedComponents/OrderButton/OrderButton"
import { Logo } from "./components/Logo/Logo"
import { NavMenu } from "./components/NavMenu/NavMenu"
import { HeaderStyled } from "./Header.styled"

export const Header = () => {

  return (
    <HeaderStyled>
      <Logo />
      <NavMenu />
      <OrderButton />
    </HeaderStyled>
  )
}