import { LeftLinksA, LeftLinksUl, Li } from "./Links.styled"

export const LeftLinks = () => {

  return (
    <LeftLinksUl>
      <Li>
        <LeftLinksA href="/">
          <span style={{ filter: 'drop-shadow(0px 0px 4px #065df3)'}}>Tik</span>
          <span style={{ filter: 'drop-shadow(0px 0px 4px #f30669)'}}>Tok</span>
        </LeftLinksA>
      </Li>
      <Li>
        <LeftLinksA href="/">

          <span style={{ color: '#0046f8' }}>
            Linked
          </span>
          
          <span>In</span>

        </LeftLinksA>
      </Li>
    </LeftLinksUl>
  )
}