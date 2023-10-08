import styled from "@emotion/styled";

export const ProjectBox = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;

  height: 500px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;

    z-index: 10;

    width: 100%;
    height: 4px;
    border-radius: 2px;

    background-color: #ffffff8b;
    box-shadow: 0px 0px 8px 1px #72aae5bf;

    @media screen and (max-width: 690px) {
      display: none;
    }
  }

  @media screen and (max-width: 864px) {
    width: 100%;
  }

  @media screen and (max-width: 690px) {
    overflow-x: scroll;
    justify-content: flex-start;
  }
`

export const Ul = styled.ul`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 1070px) {
    gap: 20px;
  }

  @media screen and (max-width: 690px) {
    gap: 50px;
  }
`

export const Item = styled.button`

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 250px;
  height: 350px;

  padding: 10px 10px 20px 10px;
  border: 2px solid #ffffffc2;
  border-radius: 2px;
  background-color: transparent;
  box-shadow: 0px 0px 6px 1px #72a9e5;


  cursor: pointer;
  transition: 200ms;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0px 0px 6px 1px #d9d9d9;
  }

  @media screen and (max-width: 1070px) {
    width: 200px;
    height: 300px;
  }
`

export const ItemTypeUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const ItemTypeLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`

export const ItemTypeB = styled.b`
  letter-spacing: 0.1em;
  color: #fff;
  font-size: 16px;
`

export const ItemTypeP = styled.p`
  font-family: 'Raleway';
  font-size: 20px;
  color: #fff;
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70%;
`

export const Img = styled.img`
  width: 90%;
  height: 150px;
`

// FIRST ITEM ELEM

export const ItemH3 = styled.h3`
  font-family: 'Raleway';

  font-size: 40px;
  letter-spacing: 0.1em;
  text-align: center;
  color: white;

  rotate: 354deg;

  @media screen and (max-width: 1070px) {
    font-size: 30px;
  }
`

export const SpanH3 = styled.span`
  font-size: 40px;
  color: #006262de;
  text-shadow: 0px 0px 4px #006262;
  letter-spacing: 0.1em;

  @media screen and (max-width: 1070px) {
    font-size: 30px;
  }
`