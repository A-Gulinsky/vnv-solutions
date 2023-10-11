// emotion
import { Li, Link, Ul } from "./Navigation.styled"

export const Navigation = () => {

  return (
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
  )
}