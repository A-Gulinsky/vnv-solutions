import { Ul } from "./ButtonList.styled"


const buttons = ['first service', 'second service']

export const ButtonList = ({handleButtonClick}) => {

  return (
    <Ul>
        {buttons.map((button, idx) => (
          <li key={idx}>
            <button type="button" onClick={() => handleButtonClick(idx + 1)}>{button}</button>
          </li>
        ))}
    </Ul>
  )
}