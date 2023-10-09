import { Faq } from './Faq'

import data from 'data/faq.json'
import { FaqFirstList, FaqLastList, GeneralContainer } from './Faq.styled'

export const FaqContainer = () => {

  return (
    <GeneralContainer>
      <FaqFirstList>
        {data.filter(item => item.id <= 4).map(item => (
          <li key={item.id}>
            <Faq title={item.title}>
              {item.text}
            </Faq>
          </li>
        ))}
      </FaqFirstList>

      <FaqLastList>
        {data.filter(item => item.id >= 5).map(item => (
          <li key={item.id}>
            <Faq title={item.title}>
              {item.text}
            </Faq>
          </li>
        ))}
      </FaqLastList>
    </GeneralContainer>
  )
}