import styled from "@emotion/styled";

export const MobileSocialContainer = styled.div`

  display: none;

  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: 20px;
  }

  @media screen and (max-width: 440px) {
    margin-right: 0;
    margin-left: 0;
  }
`

export const UpperMobileUl = styled.ul`
  display: flex;
  gap: 20px;

  margin-bottom: 15px;
`

export const BottomMobileUl = styled.ul`
  display: flex;
  gap: 20px;
`

export const MobileLinkLi = styled.li`
`

export const MobileLinkA = styled.a`

  padding: 5px;

  text-decoration: none;
  color: transparent;

`

// svg
export const svgStyle = {
  fill: '#fff',
  width: 30,
  height: 30
}
