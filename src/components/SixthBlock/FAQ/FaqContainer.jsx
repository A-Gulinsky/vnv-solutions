import { Faq } from './Faq'

import data from 'data/faq.json'
import { FaqFirstList, FaqLastList, GeneralContainer } from './Faq.styled'

const ulVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0}
}

const ulVariant1 = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0}
}


export const FaqContainer = () => {

  return (
    <GeneralContainer>
      <FaqFirstList
        variants={ulVariant}
        transition={{ duration: 1.4}}
      >
        {data.filter(item => item.id <= 4).map((item) => (
          <li key={item.id}>
            <Faq title={item.title}>
              {item.text}
            </Faq>
          </li>
        ))}
      </FaqFirstList>

      <FaqLastList
        variants={ulVariant1}
        transition={{ duration: 1.4}}
      >
        {data.filter(item => item.id >= 5).map((item) => (
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