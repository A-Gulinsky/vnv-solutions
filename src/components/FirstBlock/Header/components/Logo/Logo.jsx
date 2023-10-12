// emotion
import { LogoLink, LogoStyled, Text, Ul, logoStyle1, logoStyle2, logoStyle3 } from "./Logo.styled"

// svg icons
import { ReactComponent as LogoV } from 'assets/photo/logo/V.svg'
import { ReactComponent as LogoN } from 'assets/photo/logo/N.svg'

// framer / anim
import { motion } from "framer-motion"
import { firstL, animN, lastL, textAnim } from "./anim"

// filter: 'drop-shadow(0px 0px 5px #ff0000)'

export const Logo = () => {

  return (
    
    <LogoLink href="/vnv-solutions/index.html">
      <Ul>

        {/* V */}
        <motion.li
          variants={firstL}
          initial='hidden'
          animate='visible'
          transition={{duration: 1, delay: 1}}
        >
          <LogoV style={logoStyle1} />
        </motion.li>

        {/* N */}
        <motion.li
          variants={animN}
          initial='hidden'
          animate='visible'
          transition={{duration: 0.6, delay: 2}}
        >
          <LogoN style={logoStyle2} />
        </motion.li>

        {/* V */}
        <motion.li
          variants={lastL}
          initial='hidden'
          animate='visible'
          transition={{duration: 1, delay: 2.6}}
        >
          <LogoV style={logoStyle3} />
        </motion.li>
      </Ul>

      <Text
        variants={textAnim}
        initial='hidden'
        animate='visible'
        transition={{duration: 0.4, delay: 3.6}}
      >
        solutions
      </Text>
    </LogoLink>
  )
}