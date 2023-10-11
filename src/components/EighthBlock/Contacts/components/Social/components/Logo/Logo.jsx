import { ReactComponent as LogoV } from 'assets/photo/logo/V.svg'
import { ReactComponent as LogoN } from 'assets/photo/logo/N.svg'

import { logoStyle3,logoStyle2,logoStyle1,LogoStyled,Ul, Text } from "./Logo.styled"

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