import { ReactComponent as LogoV } from 'assets/photo/logo/V.svg'
import { ReactComponent as LogoN } from 'assets/photo/logo/N.svg'

import { LogoStyled,Ul, Text } from "./Logo.styled"

// style
const logoStyle1 = {
  fill: '#ffffffc7',
  width: 50,
  height: 50,
  filter: 'drop-shadow(0px 0px 5px #007bff)',
  transform: 'translateX(17px)'
}

const logoStyle2 = {
  fill: '#ffffffc7',
  width: 50,
  height: 50,
  filter: 'drop-shadow(0px 0px 5px #007bff)'
}

const logoStyle3 = {
  fill: '#ffffffc7',
  width: 50,
  height: 50,
  filter: 'drop-shadow(0px 0px 5px #007bff)',
  transform: 'translateX(-17px)'
}

export const Logo = () => {

  return (
    <LogoStyled>
      <Ul>
        {/* V */}
        <li>
          <LogoV style={logoStyle1} />
        </li>
        {/* N */}
        <li>
          <LogoN style={logoStyle2} />
        </li>

        {/* V */}
        <li>
          <LogoV style={logoStyle3} />
        </li>
      </Ul>

      <Text>
        solutions
      </Text>
    </LogoStyled>
  )
}