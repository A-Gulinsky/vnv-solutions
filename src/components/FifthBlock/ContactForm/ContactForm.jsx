

// react hook form/emotion
import { useForm } from "react-hook-form"
import { Form, Button } from './ContactForm.styled' 

// inputSettings
import { useState } from "react"
import { FormViber } from "./components/CommunicationList/Viber/FormViber"
import { WhatsApp } from "./components/CommunicationList/WhatsApp/FormWhatsApp"
import { Telegram } from "./components/CommunicationList/Telegram/FormTelegram"
import { Phone } from "./components/CommunicationList/Phone/FormPhone"
import { CommunicationBtnList } from "./components/CommunicationBtnList/CommunicationBtnList"
import { BasicInput } from "./components/BasicInput/BasicInput"
import { TextArea } from "./components/TextArea/TextArea"


export const ContactForm = () => {
  
  const [communicationChoice, setCommunicationChoice] = useState('phone')

  const handleChoiceClick = (type) => {
    console.log(type)
    setCommunicationChoice(type)
  }

  console.log(communicationChoice)

  // react hook form
  const { register, handleSubmit, formState: { errors },reset } = useForm({
    defaultValues: {
      name: '',
      email: ''
    }
  })

  // using dispatch in this func.
  const onSubmit = (data) => {
    
    console.log(data)

    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      
      <BasicInput register={register} errors={errors} />

      <CommunicationBtnList activeChoice={communicationChoice} handleChoiceClick={handleChoiceClick} />
      
      {communicationChoice === 'phone' && <Phone register={register} errors={errors} />}
      {communicationChoice === 'telegram' && <Telegram register={register} errors={errors} />}
      {communicationChoice === 'whatsapp' && <WhatsApp register={register} errors={errors} />}
      {communicationChoice === 'viber' && <FormViber register={register} errors={errors} />}
      

      <TextArea register={register} errors={errors} />

      <Button type="submit" value="Send" />
      
    </Form>
  )
}