import { ButtonBack, TopElementsContainer, svgStyle } from './TopElements.styled'
import { Logo } from './Logo/Logo'

import {ReactComponent as Svg} from 'assets/photo/mobilebackbtn.svg'


export const TopElements = ({onClose}) => {
  return (
    <TopElementsContainer>

      <Logo />

      <ButtonBack type="button" onClick={onClose}>
        <Svg style={svgStyle} />
      </ButtonBack>
    </TopElementsContainer>
  )
}