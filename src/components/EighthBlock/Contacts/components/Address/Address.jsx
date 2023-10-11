
// emotion
import { AddressContainer, AddressListItemA, AddressEmailA, AddressListItemP } from "./Address.styled"

export const Address = () => {

  return (
    <AddressContainer>

      <AddressEmailA href="mailto:team@vnv.solutions">team@vnv.solutions</AddressEmailA>

      <address>
        <AddressListItemA
          href="https://www.google.com.ua/maps/search/%D0%9A%D0%B0%D1%80%D0%BB%D0%B0+%D0%9C%D0%B8%D0%BA%D0%BB%D0%BE%D1%88%D0%B0++7+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/@49.776322,24.0221784,17z/data=!3m1!4b1?entry=ttu"
          target="_blank"
          rel="noreferrer nofollow noopener"
        >
          <AddressListItemP>Karla Miklʹosha, 7</AddressListItemP>
          <AddressListItemP>Lviv, Ukraine</AddressListItemP>
        </AddressListItemA>
      </address>
    </AddressContainer>
  )
}