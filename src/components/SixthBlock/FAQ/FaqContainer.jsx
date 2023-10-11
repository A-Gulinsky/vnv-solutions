
// component
import { Faq } from './Faq'

// data
import data from 'data/faq.json'

// emotion
import { FaqFirstList, FaqLastList, GeneralContainer } from './Faq.styled'

// anim
import { ulVariant,ulVariant1 } from './anim'


export const FaqContainer = () => {

  return (
    <GeneralContainer>

      <FaqFirstList variants={ulVariant} transition={{ duration: 1.4 }}>
    
        {data.filter(item => item.id <= 4).map((item) => (
          <li key={item.id}>
            <Faq title={item.title}>
              {item.text}
            </Faq>
          </li>
        ))}

      </FaqFirstList>

      <FaqLastList variants={ulVariant1} transition={{ duration: 1.4 }}>
        
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