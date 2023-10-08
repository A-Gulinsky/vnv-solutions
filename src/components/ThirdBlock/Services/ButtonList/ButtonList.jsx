import { Button, Ul } from "./ButtonList.styled"


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