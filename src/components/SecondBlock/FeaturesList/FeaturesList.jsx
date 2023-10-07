import { Ul, Li, DecoDiv, Button, ItemTitle, ClickMe } from "./FeaturesList.styled"

import advantages from '../../../data/features.json'

import { GoGear, GoChecklist } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";

export const FeaturesList = ({ handleItemClick, activeLi }) => {
  
  const divAnim = {
    hidden: {
      x: 0,
      rotate: 0
    },
    visible: {
      y: -120,
      rotate: -30
    },
    visible2: {
      x: -800,
      rotate: -70
    },
    visible3: {
      rotate: 70,
      y: -70
    }
  }

  return (
    <div style={{ display: 'flex', position: 'relative'}}>
      <Ul>
        {advantages.map(item => (
          <Li key={item.id} itemKey={item.id}>
            <Button disabled={activeLi && true} onClick={() => handleItemClick(item.id - 1)}>
              <ItemTitle>{item.advantage}</ItemTitle>
              {item.id === 1 && <FaRegHandshake style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
              {item.id === 2 && <GoGear style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
              {item.id === 3 && <IoIosTimer style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
              {item.id === 4 && <GoChecklist style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
              {item.id === 5 && <MdOutlineDesignServices style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
              {item.id === 6 && <GiMagnifyingGlass style={{ width: 80, height: 80, fill: '#fff', filter: "drop-shadow(0px 0px 15px #4ea0f6)" }} />}
            </Button>
          </Li>
        ))}
      </Ul>
      {activeLi &&
        <DecoDiv
          initial='hidden'
          animate={['visible', 'visible2', 'visible3']}
          variants={divAnim}
          transition={{duration: 1}}
        />
      }

      <ClickMe style={{color: 'white'}}>Click me &#8593;</ClickMe>
      
    </div>
  )
}