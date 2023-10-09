

// react hook form/emotion
import { useForm } from "react-hook-form"
import { Form, P, Input, Button } from './ContactForm.styled' 

// inputSettings
import { NameOptions, NumberOptions } from "./InputField"
import { useState } from "react"
import { FormViber } from "./components/CommunicationList/FormViber"


export const ContactForm = () => {
  
  const [communicationChoice, setCommunicationChoice] = useState(null)

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
      
      <b>Name</b>

      <Input
        autoComplete="off"
        {...register("name", NameOptions)}
        style={{ borderColor: errors.name ? 'red' : 'initial' }}
        placeholder="Name"
      />
      {errors.name && <P>{errors.name.message}</P>}

      <b>Email</b>

      <Input
        autoComplete="off"
        {...register("email", NumberOptions)}
        style={{ borderColor: errors.email ? 'red' : 'initial' }}
        placeholder="Email"
        type="email"
      />
      {errors.email && <P>{errors.email.message}</P>}

      <ul>
        <li>
          <button type="button" onClick={() => handleChoiceClick('phone')}>Phone</button>
        </li>
        <li>
          <button type="button" onClick={() => handleChoiceClick('telegram')}>Telegram</button>
        </li>
        <li>
          <button type="button" onClick={() => handleChoiceClick('whatsapp')}>WA</button>
        </li>
        <li>
          <button type="button" onClick={() => handleChoiceClick('viber')}>Viber</button>
        </li>
      </ul>

      {communicationChoice === 'viber' && <FormViber />}

      <textarea
        autoComplete="off"
        {...register("message", { required: "Message is required" })}
        style={{ borderColor: errors.message ? 'red' : 'initial' }}
        placeholder="Your message"
      />
      {errors.message && <P>{errors.message.message}</P>}

      <Button type="submit" value="Send" />
      
    </Form>
  )
}