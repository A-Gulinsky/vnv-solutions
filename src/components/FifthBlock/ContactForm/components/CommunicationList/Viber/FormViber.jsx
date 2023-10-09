
import { FaViber } from "react-icons/fa6"
import { Input, Label } from "./FormViber.styled"

export const FormViber = ({register, errors}) => {

  return (
    <Label>

      <FaViber style={{ width: 30, height: 30, paddingRight: '10px', fill: '#ffffffd0',filter: 'drop-shadow(0px 0px 8px #7500ebd2)' }} />

      <Input
        autoComplete="off"
        {...register("viber", {
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
        placeholder="Viber"
        type="number"
      />
    </Label>
  )
}