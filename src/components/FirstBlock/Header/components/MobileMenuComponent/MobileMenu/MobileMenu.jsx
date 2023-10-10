import { MobileMenuContainer, MobileMenuStyledContainer } from "./MobileMenu.styled";
import { BottomElements } from "./components/BottomElements/BottomElements";
import { MobileOrderButton } from "./components/MobileOrderButton/MobileOrderButton";
import { Navigation } from "./components/Navigation/Navigation";
import { TopElements } from "./components/TopElements/TopElements";

export const MobileMenu = ({ onClose, isOpen }) => {

  const openMenu = {
  hidden: {
    x: '105%'
  },
  visible: {
    x: 0
  }
  };

  const closeMenu = {
  hidden: {
    x: 0
  },
  visible: {
    x: '105%'
  }
  };

  return (
    <MobileMenuContainer
      variants={isOpen ? openMenu : closeMenu}
      initial='hidden'
      animate='visible'
      transition={{duration: 0.4}}
    >
      
        <TopElements onClose={onClose} />
        <Navigation />
        <MobileOrderButton />
        <BottomElements />
      
    </MobileMenuContainer>
  );
}
