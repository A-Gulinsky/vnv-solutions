import { BasicInputContainer, Input, InputTitle, Label, P } from "./BasicInput.styled"

import { NameOptions, NumberOptions } from "./InputField"

import { BsPeople } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

import { errorAnim } from "../errorAnim"

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
            autoComplete="nope"
            {...register("name", NameOptions)}
            placeholder="Name"
          />
          {errors.name && <P variants={errorAnim} initial='hidden' animate='visible' transition={{duration: 0.2}}>{errors.name.message}</P>}
        </Label>
      </BasicInputContainer>
      
      <BasicInputContainer>
        <InputTitle>Email</InputTitle>
        <Label>

          <AiOutlineMail style={svgStyle} />

          <Input
            autoComplete="off"
            {...register("email", NumberOptions)}
            placeholder="Email"
            type="email"
          />
          {errors.email && <P variants={errorAnim} initial='hidden' animate='visible' transition={{duration: 0.2}}>{errors.email.message}</P>}
        </Label>
      </BasicInputContainer>
    </>
  )
}