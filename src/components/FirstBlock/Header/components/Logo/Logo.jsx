import { LogoStyled, Text, Ul } from "./Logo.styled"

import { ReactComponent as LogoV } from 'assets/photo/logo/V.svg'
import { ReactComponent as LogoN } from 'assets/photo/logo/N.svg'

import { motion } from "framer-motion"

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

// anim

const firstL = {
  hidden: {
    opacity: 0,
    x: -30
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

const animN = {
  hidden: {
    opacity: 0,
    y: -30
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const lastL = {
  hidden: {
    opacity: 0,
    x: 30
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

const textAnim = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

// filter: 'drop-shadow(0px 0px 5px #ff0000)'

export const Logo = () => {

  return (
    <LogoStyled>
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
    </LogoStyled>
  )
}