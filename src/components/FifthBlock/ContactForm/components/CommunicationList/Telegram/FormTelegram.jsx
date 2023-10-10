import { Input, Label, P } from "./FormTelegram.styled"

import { PiTelegramLogo} from 'react-icons/pi'

import { errorAnim } from "../../errorAnim"


export const Telegram = ({register, errors}) => {

  return (
    <Label>

      <PiTelegramLogo style={{ width: 30, height: 30, paddingRight: '10px', fill: '#ffffffd0',filter: 'drop-shadow(0px 0px 8px #036bf3d2)' }} />

      <Input
        autoComplete="nope"
        {...register("telegram", {
          required: 'Required field',
          pattern: {
            value: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            message: `Incorrect format`
          },
          maxLength: {
            value: 10,
            message: 'Max 10 length'
          }
        })}
        style={{ borderColor: errors.phone ? 'red' : 'initial' }}
        placeholder="Telegram"
        type="text"
      />
      {errors.telegram && <P variants={errorAnim} initial='hidden' animate='visible' transition={{duration: 0.2}}>{errors.telegram.message}</P>}
    </Label>
  )
}