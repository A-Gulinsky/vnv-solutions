import { MobileMenuContainer } from "./MobileMenu.styled";

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
      <button type="button" onClick={onClose}>back</button>
      TEST
    </MobileMenuContainer>
  );
}
