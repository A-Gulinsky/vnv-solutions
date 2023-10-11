// emotion
import { Li, Link, Nav, Ul } from "./NavMenu.styled"

export const NavMenu = () => {

  return (
    <Nav>
      <Ul>
        <Li>
          <Link href="/">Why Us</Link>
        </Li>
        <Li>
          <Link href="/">
            Services
          </Link>
        </Li>
        <Li>
          <Link href="/">
            Our Projects
          </Link>
        </Li>
        <Li>
          <Link href="">
            Contact Us
          </Link>
        </Li>
      </Ul>
    </Nav>
  )
}