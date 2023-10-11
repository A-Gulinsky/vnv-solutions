
// emotion
import { ContactsContainer } from "./Contacts.styled"

// components
import { Address } from "./components/Address/Address"
import { MobileSocial } from "./components/MobileSocial/MobileSocial"
import { Social } from "./components/Social/Social"


export const Contacts = () => {

  return (
    <ContactsContainer>

      <Address />
      <Social />

      {/* Mobile Social */}
      <MobileSocial />
    </ContactsContainer>
  )
}