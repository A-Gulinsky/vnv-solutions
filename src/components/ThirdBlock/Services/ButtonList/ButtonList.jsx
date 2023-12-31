
// emotion
import { Button, Ul } from "./ButtonList.styled"

// props
import PropTypes from 'prop-types'

// render btn titles
const buttons = [
  'SOFTWARE DEVELOPMENT',
  'ERP',
  'ONLINE-STORE DEVELOPMENT',
  'SUPPORT AND UPDATES',
  'BOT DEVELOPMENT',
  'WEBSITE TRANSFERRING'
]

export const ButtonList = ({handleButtonClick,idxService}) => {

  return (
    <Ul>

      {buttons.map((button, idx) => (
        <li key={idx}>
          <Button
            transition={{duration: 1}}
            type="button"
            onClick={() => handleButtonClick(idx + 1)}
            active={idxService === idx + 1 ? true : false}
          >
            {button}
          </Button>
        </li>
      ))}
    </Ul>
  )
}

ButtonList.propTypes = {
  handleButtonClick: PropTypes.func,
  idxService: PropTypes.number
}
