
// emotion
import { MobileMenuContainer } from "./MobileMenu.styled";

// components
import { BottomElements } from "./components/BottomElements/BottomElements";
import { MobileOrderButton } from "./components/MobileOrderButton/MobileOrderButton";
import { Navigation } from "./components/Navigation/Navigation";
import { TopElements } from "./components/TopElements/TopElements";

// anim
import { openMenu, closeMenu } from "./anim";

export const MobileMenu = ({ onClose, isOpen }) => {

  return (
    <MobileMenuContainer
      variants={isOpen ? openMenu : closeMenu}
      initial='hidden'
      animate='visible'
      transition={{duration: 0.4}}
    >
      
        <TopElements onClose={onClose} />
        <Navigation onClose={onClose} />
        <MobileOrderButton />
        <BottomElements />
      
    </MobileMenuContainer>
  );
}
