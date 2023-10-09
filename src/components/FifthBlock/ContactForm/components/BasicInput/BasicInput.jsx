import { BasicInputContainer, Input, InputTitle, Label, P } from "./BasicInput.styled"

import { NameOptions, NumberOptions } from "./InputField"

import { BsPeople } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const svgStyle = {
  width: 30,
  height: 30,
  paddingRight: '10px',
  fill: '#ffffffcf',
  filter: 'drop-shadow(0px 0px 5px #2f8aeb)'
}

export const BasicInput = ({register , errors}) => {

  return (
    <> 
      
      <BasicInputContainer>
        <InputTitle>Name</InputTitle>
        <Label>
        
          <BsPeople style={svgStyle} />

          <Input
            autoComplete="off"
            {...register("name", NameOptions)}
            style={{ borderColor: errors.name ? 'red' : 'initial' }}
            placeholder="Name"
          />
          {errors.name && <P>{errors.name.message}</P>}
        </Label>
      </BasicInputContainer>
      
      <BasicInputContainer>
        <InputTitle>Email</InputTitle>
        <Label>

          <AiOutlineMail style={svgStyle} />

          <Input
            autoComplete="off"
            {...register("email", NumberOptions)}
            style={{ borderColor: errors.email ? 'red' : 'initial' }}
            placeholder="Email"
            type="email"
          />
          {errors.email && <P>{errors.email.message}</P>}
        </Label>
      </BasicInputContainer>
    </>
  )
}