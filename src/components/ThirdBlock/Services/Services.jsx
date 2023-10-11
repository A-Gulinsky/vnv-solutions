import { useState } from "react"

// emotion
import { ServicesContainer } from "./Services.styled"

// components
import { FirstService } from "./components/FirstService/FirstService"
import { SecondService } from "./components/SecondService/SecondService"
import { ThirdService } from "./components/ThirdService/ThirdService"
import { FourthService } from "./components/FourthService/FourthService"
import { FifthService } from "./components/FifthService/FifthService"
import { SixthService } from "./components/SixthService/SixthService"
import { ButtonList } from "./ButtonList/ButtonList"

const services = [<FirstService />,<SecondService />, <ThirdService />, <FourthService />, <FifthService />,<SixthService />]

export const Services = () => {

  const [idxService, setIdxService] = useState(1)

  const handleButtonClick = idx => {
    setIdxService(idx)
  }

  return (
    <ServicesContainer>
      
      <ButtonList handleButtonClick={handleButtonClick} idxService={idxService} />
      {idxService && services[idxService -1]}

    </ServicesContainer>
  )
}