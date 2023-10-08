import { useState } from "react"
import { MobileButton } from "./MobileButton/MobileButton"
import { MobileMenu } from "./MobileMenu/MobileMenu"
import { ParentComponent } from "./MobileMenu/ParentComponent"

export const MobileMenuComponent = () => {

  const [mobMenuIsOpen, setMobMenuIsOpen] = useState(false)
  const [animIsOpen, setAnimIsOpen] = useState(false)

  const MenuIsOpen = () => {
    setMobMenuIsOpen(true)
    setAnimIsOpen(true)
  }

  const MenuIsClose = () => {

    setAnimIsOpen(false)

    setTimeout(() => {
      setMobMenuIsOpen(false)
    }, 400)
  }

  
  return (
    <>
      <MobileButton handleMobileMenuClick={MenuIsOpen} />
      {mobMenuIsOpen && <ParentComponent isOpen={animIsOpen} onClose={MenuIsClose} />}
    </>
  )
}