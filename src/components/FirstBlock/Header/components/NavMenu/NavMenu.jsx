// emotion
import { Li, Link, Nav, Ul } from "./NavMenu.styled"

export const NavMenu = () => {

  return (
    <Nav>
      <Ul>
        <Li>
          <Link href="#whyus">Why Us</Link>
        </Li>
        <Li>
          <Link href="#services">
            Services
          </Link>
        </Li>
        <Li>
          <Link href="#projects">
            Our Projects
          </Link>
        </Li>
        <Li>
          <Link href="#contact">
            Contact Us
          </Link>
        </Li>
      </Ul>
    </Nav>
  )
}