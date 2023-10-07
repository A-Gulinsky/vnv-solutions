import styled from "@emotion/styled";

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

// UPPER CONTAINER ELEMENTS
export const UpperDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`

export const UpperItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const H3 = styled.h3`
  position: relative;

  font-family: 'Raleway';
  font-weight: 300;
  color: #ffffff;
  font-size: 26px;

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0px 0px 8px 2px #72a9e5;
  }
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const P = styled.p`
  font-family: 'Raleway';
  font-size: 16px;
  font-weight: 300;

  color: white;
`

export const Img = styled.img`
  width: 300px;
  height: 280px;
`

// LowerContainer


export const DescriptionP = styled.p`
  font-family: 'Roboto';
  text-align: center;
  color: #ffffffb6;

  font-size: 18px;
  letter-spacing: 0.1em;
`