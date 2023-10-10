import { Button, FillNowContainer, SvgContainer } from './FillNow.styled'

import {ReactComponent as Svg} from 'assets/photo/document.svg'

const svgStyle = {
  width: 300,
  height: 300,
  fill: '#ffffffae',
  filter: 'drop-shadow(0px 0px 6px #f58012)'
}

export const FillNow = () => {
  
  return (
    <FillNowContainer>
      <SvgContainer>
        <Svg style={svgStyle} />
      </SvgContainer>
      <Button type="button">Fill Now</Button>
    </FillNowContainer>
  )
}