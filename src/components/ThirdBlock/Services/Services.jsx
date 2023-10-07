import { useState } from "react"
import { ServicesContainer } from "./Services.styled"

import { FirstService } from "./components/FirstService/FirstService"
import { SecondService } from "./components/SecondService/SecondService"
import { ButtonList } from "./ButtonList/ButtonList"

const services = [<FirstService />,<SecondService />]

export const Services = () => {

  const [idxService, setIdxService] = useState(1)

  const handleButtonClick = idx => {
    setIdxService(idx)
  }

  return (
    <ServicesContainer>
      
      <ButtonList handleButtonClick={handleButtonClick} />

      {idxService && services[idxService -1]}

    </ServicesContainer>
  )
}