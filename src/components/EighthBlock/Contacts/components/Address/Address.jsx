import { AddressContainer, AddressListItemA, AddressEmailA, AddressListItemP } from "./Address.styled"

export const Address = () => {

  return (
    <AddressContainer>

      <AddressEmailA href="/">team@vnv.solutions</AddressEmailA>

      <address>
        <AddressListItemA href="/">
          <AddressListItemP>Karla Miklʹosha, 7</AddressListItemP>
          <AddressListItemP>Lviv, Ukraine</AddressListItemP>
        </AddressListItemA>
      </address>
    </AddressContainer>
  )
}