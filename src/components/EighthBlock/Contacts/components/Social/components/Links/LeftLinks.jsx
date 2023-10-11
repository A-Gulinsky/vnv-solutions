
// emotion
import { LeftLinksA, LeftLinksUl, Li } from "./Links.styled"

export const LeftLinks = () => {

  return (
    <LeftLinksUl>
      <Li>
        <LeftLinksA
          href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1"
          rel="noreferrer nofollow noopener"
          target="_blank"
        >
          <span style={{ filter: 'drop-shadow(0px 0px 4px #065df3)'}}>Tik</span>
          <span style={{ filter: 'drop-shadow(0px 0px 4px #f30669)'}}>Tok</span>
        </LeftLinksA>
      </Li>
      <Li>
        <LeftLinksA
          href="https://www.linkedin.com/company/vnv-tech/"
          rel="noreferrer nofollow noopener"
          target="_blank"
        >

          <span style={{ color: '#0046f8' }}>
            Linked
          </span>
          
          <span>In</span>

        </LeftLinksA>
      </Li>
    </LeftLinksUl>
  )
}