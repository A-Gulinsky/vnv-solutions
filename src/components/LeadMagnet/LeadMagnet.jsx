import { useState } from "react"
import { svgIcon,InfoContainer,Button, Container, Li, P, Ul, ListItemP, FirstDiscount, LastDiscount } from "./LeadMagnet.styled"

import {ReactComponent as Svg} from 'assets/photo/discount.svg'

export const LeadMagnet = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>

      {isOpen && <InfoContainer onClick={handleClick}
      >
        <P>
          Hello, order today!
        </P>
        <Ul>
          <Li>
            <ListItemP>ERP <FirstDiscount>20%</FirstDiscount></ListItemP>
          </Li>
          <Li>
            <ListItemP>Bot Dev. <LastDiscount>15%</LastDiscount></ListItemP>
          </Li>
        </Ul>
      </InfoContainer>}

      <Button onClick={handleClick}>
        <Svg style={svgIcon}/>
      </Button>
      
    </Container>
  )
}