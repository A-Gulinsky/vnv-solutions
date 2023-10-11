// emotion
import { Li, Link, Ul } from "./Navigation.styled"

export const Navigation = ({onClose}) => {

  return (
      <Ul>
        <Li>
          <Link href="#whyus" onClick={onClose}>Why Us</Link>
        </Li>
        <Li>
          <Link href="#services" onClick={onClose}>
            Services
          </Link>
        </Li>
        <Li>
          <Link href="#projects" onClick={onClose}>
            Our Projects
          </Link>
        </Li>
        <Li>
          <Link href="#contact" onClick={onClose}>
            Contact Us
          </Link>
        </Li>
      </Ul>
  )
}