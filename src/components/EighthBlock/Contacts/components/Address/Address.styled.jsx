import styled from "@emotion/styled";

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 440px) {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`

export const AddressEmailA = styled.a`
  position: relative;

  font-style: 'Raleway';
  font-size: 18px;
  color: #ffffffb8;
  letter-spacing: 0.1em;
  text-decoration: none;

  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 5%;

    width: 90%;
    height: 1px;

    border-radius: 2px;
    background-color: #ffffffb8;
  }

  &:hover,
  &:focus {
    color: #fffffff4;
  }

  @media screen and (max-width: 440px) {
    display: block;
    margin-bottom: 30px;
  }
`

export const AddressListItemA = styled.a`
  text-decoration: none;
`

export const AddressListItemP = styled.p`
  font-style: 'Raleway';
  font-size: 18px;
  font-weight: 200;
  color: #ffffffb8;
  letter-spacing: 0.1em;
`