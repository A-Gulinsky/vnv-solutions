import { Input, Label } from "./FormPhone.styled"

import { MdPhoneIphone } from 'react-icons/md'

export const Phone = ({register, errors }) => {

  return (
    <Label>

      <MdPhoneIphone  style={{ width: 30, height: 30, paddingRight: '10px', fill: '#ffffffb5',filter: 'drop-shadow(0px 0px 4px #77d5f79f)' }}/>

      <Input
        autoComplete="off"
        {...register("phone", {
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
        placeholder="Phone"
        type="number"
      />
    </Label>
  )
}