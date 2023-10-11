
// emotion
import { SocialContainer } from "./Social.styled"

// components
import { LeftDeco } from "./components/Deco/LeftDeco"
import { RightDeco } from "./components/Deco/RightDeco"
import { LeftLinks } from "./components/Links/LeftLinks"
import { RightLinks } from "./components/Links/RightLinks"
import { Logo } from "./components/Logo/Logo"

export const Social = () => {

  return (
    <SocialContainer>
      <LeftLinks />
      <LeftDeco />
      <Logo />
      <RightDeco />
      <RightLinks />
    </SocialContainer>
  )
}