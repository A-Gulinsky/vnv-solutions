
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { Input, Label } from './FormWhatsApp.styled'

export const WhatsApp = ({register, errors}) => {

  return (
    <Label>

      <AiOutlineWhatsApp style={{ width: 30, height: 30, paddingRight: '10px', fill: '#ffffffd0',filter: 'drop-shadow(0px 0px 8px #04e10bd2)' }} />

      <Input
        autoComplete="off"
        {...register("whatsapp", {
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
        placeholder="WhatsApp"
        type="number"
      />
    </Label>
  )
}