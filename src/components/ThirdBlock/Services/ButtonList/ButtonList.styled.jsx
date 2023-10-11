import styled from "@emotion/styled";

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 35px 0;

  @media screen and (min-width: 572px ) and (max-width:1075px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 571px) {
    justify-content: flex-start;
    min-width: 100%;
    margin-left: 0;
    margin-bottom: 10px;

    overflow: auto;
    scroll-snap-type: proximity;
  }

  @media screen and (max-width: 510px) {
    padding-bottom: 20px;
  }
`

const activeBtn = ({active}) => {
  if (!active) {
    return '0px 0px 8px 2px #72aae5b0'
  }

  return '0px 0px 8px 1px #ffffffcd'
}

export const Button = styled.button`
  width: 120px;
  height: 40px;
  padding: 5px 10px;

  font-family: 'Roboto',sans-serif;
  font-weight: 500;
  color: #ffffffbb;
  font-size: 12px;

  background-color: transparent;
  border: 1px solid #ffffffbb;
  border-radius: 4px;
  box-shadow: ${activeBtn};

  transition: 200ms;
  cursor: pointer;  
  outline: transparent;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 8px 1px #ffffffcd;

    transform: scale(1.07);
  }
`