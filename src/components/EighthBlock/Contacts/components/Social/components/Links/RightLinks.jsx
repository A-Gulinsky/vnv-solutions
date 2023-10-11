
// emotion
import { Li, RightLinksA, RightLinksUl } from "./Links.styled"

export const RightLinks = () => {

  return (
    <RightLinksUl>

      <Li>
        <RightLinksA
          rel="noreferrer nofollow noopener"
          href="https://t.me/vnv_solutions"
          target="_blank"
        >
          <span style={{
            textShadow: '0px 0px 8px #0091ff',
            color: '#7da9db'
          }}>
            Telegram
          </span>
        </RightLinksA>
      </Li>

      <Li>
        <RightLinksA
          href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D"
          rel="noreferrer nofollow noopener"
          target="_blank"
        >
          <span style={{ filter: 'drop-shadow(0px 0px 4px #f30635)'}}>Ins</span>
          <span style={{ filter: 'drop-shadow(0px 0px 4px #f3069c)'}}>tag</span>
          <span style={{ filter: 'drop-shadow(0px 0px 4px #e3f306)'}}>ram</span>
        </RightLinksA>
      </Li>

      <Li>
        <RightLinksA
          rel="noreferrer nofollow noopener"
          href="https://www.facebook.com/people/VNV-Solutions/100088433736254/"
          target="_blank"
        >
          <span style={{
            filter: 'drop-shadow(0px 0px 4px #060af3)',
            color: '#ffffffd3'
          }}>
            Facebook
          </span>
        </RightLinksA>
      </Li>
    </RightLinksUl>
  )
}