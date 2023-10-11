
// emotion
import { Li, RightLinksA, RightLinksUl } from "./Links.styled"

export const RightLinks = () => {

  return (
    <RightLinksUl>

      <Li>
        <RightLinksA href="/">
          <span style={{
            textShadow: '0px 0px 8px #0091ff',
            color: '#7da9db'
          }}>
            Telegram
          </span>
        </RightLinksA>
      </Li>

      <Li>
        <RightLinksA href="/">
          <span style={{ filter: 'drop-shadow(0px 0px 4px #f30635)'}}>Ins</span>
          <span style={{ filter: 'drop-shadow(0px 0px 4px #f3069c)'}}>tag</span>
          <span style={{ filter: 'drop-shadow(0px 0px 4px #e3f306)'}}>ram</span>
        </RightLinksA>
      </Li>

      <Li>
        <RightLinksA href="/">
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