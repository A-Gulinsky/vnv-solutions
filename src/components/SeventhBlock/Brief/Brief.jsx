import { BriefContainer } from "./Brief.styled"
import { BriefText } from "./components/BriefText/BriefText"
import { FillNow } from "./components/FillNow/FillNow"

export const Brief = () => {

  return (
    <BriefContainer>
      <BriefText />
      <FillNow />
    </BriefContainer>
  )
}