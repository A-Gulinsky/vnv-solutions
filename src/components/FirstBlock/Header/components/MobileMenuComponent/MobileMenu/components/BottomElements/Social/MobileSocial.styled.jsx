import styled from "@emotion/styled";

export const MobileSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  padding: 0 20px 30px;

  @media screen and (max-width: 540px) {
    gap: 20px;
  }

  @media screen and (max-width: 445px) {
    flex-direction: column;
  }

  @media screen and (orientation: landscape) {
    margin-top: 20px;
    margin-bottom: 70px;
  }
`

export const UpperMobileUl = styled.ul`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 540px) {
    gap: 20px;
  }
`

export const BottomMobileUl = styled.ul`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 540px) {
    gap: 20px;
  }
`

export const MobileLinkLi = styled.li`
`

export const MobileLinkA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;

  text-decoration: none;
  color: transparent;

`

// svg style
export const svgStyle = {
  fill: '#fff',
  width: 50,
  height: 50
}