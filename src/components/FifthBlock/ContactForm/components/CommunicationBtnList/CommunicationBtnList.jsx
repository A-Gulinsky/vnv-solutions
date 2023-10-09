import { Button, CommunicationContainer, InputTitle, Ul } from "./CommunicationBtnList.styled"

import { MdPhoneIphone } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaViber } from 'react-icons/fa'
import { PiTelegramLogo } from 'react-icons/pi'

const btnStyle = {
  width: 35,
  height: 35,
  fill: '#ffffffd0'
}

export const CommunicationBtnList = ({activeChoice,handleChoiceClick}) => {
  
  return (
    <CommunicationContainer>
      <InputTitle>Communication method</InputTitle>
      <Ul>
        <li>
          <Button
            type="button"
            onClick={() => handleChoiceClick('phone')}
            active={activeChoice === 'phone' && true}
            style={{filter: 'drop-shadow(0px 0px 4px #77d5f79f)'}}
          >
            <MdPhoneIphone style={btnStyle}/>
          </Button>
        </li>
        <li>
          <Button
            type="button"
            onClick={() => handleChoiceClick('telegram')}
            active={activeChoice === 'telegram' && true}
            style={{filter: 'drop-shadow(0px 0px 8px #036bf3d2)'}}
          >
            <PiTelegramLogo style={btnStyle} />
          </Button>
        </li>
        <li>
          <Button
            type="button"
            onClick={() => handleChoiceClick('whatsapp')}
            active={activeChoice === 'whatsapp' && true}
            style={{filter: 'drop-shadow(0px 0px 8px #04e10bd2)'}}
          >
            <AiOutlineWhatsApp style={btnStyle} />
          </Button>
        </li>
        <li>
          <Button
            type="button"
            onClick={() => handleChoiceClick('viber')}
            active={activeChoice === 'viber' && true}
            style={{filter: 'drop-shadow(0px 0px 8px #7500ebd2)'}}
          >
            <FaViber style={btnStyle} />
          </Button>
        </li>
      </Ul>
    </CommunicationContainer>
  )
}