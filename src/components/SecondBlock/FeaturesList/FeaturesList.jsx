import { useEffect, useState } from "react";

// emotion
import { Ul, Li, DecoDiv, Button, ItemTitle, ClickMe } from "./FeaturesList.styled"

// data
import advantages from '../../../data/features.json'

// react icons
import { GoGear, GoChecklist } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";

// anim
import { listBlockAnim, clickMeAnim } from "./anim";

export const FeaturesList = ({ handleItemClick, activeLi }) => {
  
  // changes the direction of the ball at viewport
  const [bollValueX, setBollValueX] = useState(-800)
  const [bollValueY, setBollValueY] = useState(-70)

  useEffect(() => {
    // Callback function that will be called when the screen width changes
    const handleResize = () => {
      if (window.innerWidth < 1022) {
        setBollValueX(-500)
      } else {
        setBollValueX(-800)
      }
      
      if (window.innerWidth < 870) {
        setBollValueX(0)
        setBollValueY(370)
      } else {
        setBollValueX(-500)
        setBollValueY(-70)
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // boll anim
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
      x: bollValueX,
      rotate: -70
    },
    visible3: {
      rotate: 180,
      y: bollValueY
    }
  }

  return (
    <div style={{ display: 'flex', position: 'relative'}}>
      <Ul variants={listBlockAnim} transition={{duration: 2}}>
        
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

      <ClickMe
        variants={clickMeAnim}
        transition={{duration: 0.5, delay: 1.8}}
        style={{ color: 'white' }}
      >
        Click me &#8593;
      </ClickMe>
      
    </div>
  )
}