// emotion
import { Li, Link, Ul } from "./Navigation.styled"

// props
import PropTypes from 'prop-types'

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

Navigation.propTypes = {
  onClose: PropTypes.func,
}
