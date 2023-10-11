

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

import { toast } from "react-toastify"

const testAnim = {
  hidden: {
    opacity: 0,
    x: 80
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

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
    
    toast.success(`Thank you, wait for the answer!`)
    reset()
  }

  return (
    <Form
      variants={testAnim}
      transition={{ duration: 1.5, delay: 1 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      
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