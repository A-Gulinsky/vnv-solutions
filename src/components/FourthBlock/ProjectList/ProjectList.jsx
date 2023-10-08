import { useState } from "react"
import { Item, Ul } from "./ProjectList.styled"

import projects from 'data/projects.json'

import { motion } from 'framer-motion'

export const ProjectList = () => {

  const [activeInfo, setActiveInfo] = useState(false)
  const [activeIdx, setActiveIdx] = useState(1)

  const [openAnim, setOpenAnim] = useState(false)

  const handleBtnClick = (idx) => {
    console.log(idx)
    setActiveInfo(true)
    setActiveIdx(idx)

    setOpenAnim(true)
  }

  const handleBtnBack = () => {
    setOpenAnim(false)

    setTimeout(() => {
      setActiveInfo(false)
    }, 300)
  }

  const infoAnimOpen = {
    hidden: {
      y: '-100%',
      
    },
    visible: {
      y: 0,
      
    }
  }

  const infoAnimClose = {
    hidden: {
      y: 0,
      
    },
    visible: {
      y: '-100%',
      
    }
  }

  return (
    <div style={{overflow: 'hidden'}}>

      {!activeInfo && <Ul>
        {projects.map((project, idx) => (
          <li key={idx}>
          <Item type="button" onClick={() => handleBtnClick(idx + 1)}>
            <div>
              <b>Photo</b>
            </div>
            <b>Name</b>
            <b>Type</b>
          </Item>
        </li>
        ))}
      </Ul>}

      {activeInfo && <motion.div variants={openAnim ? infoAnimOpen : infoAnimClose}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3 }}
        style={{ width: '100%', height: '400px', backgroundColor: 'red' }}>
        {activeIdx && <div>
          <button type="button" onClick={handleBtnBack}>Back</button>
          <h1>{projects[activeIdx - 1].project}</h1>
          <p>{projects[activeIdx - 1].text}</p>
        </div>}
      </motion.div>}

      
    </div>
  )
}