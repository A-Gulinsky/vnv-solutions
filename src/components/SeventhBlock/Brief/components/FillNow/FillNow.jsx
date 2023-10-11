
// emotion /svg
import { svgStyle, Button, FillNowContainer, SvgContainer } from './FillNow.styled'
import {ReactComponent as Svg} from 'assets/photo/document.svg'


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