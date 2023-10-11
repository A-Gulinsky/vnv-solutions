import { useEffect } from "react";
import { createPortal } from "react-dom";

// component
import { MobileMenu } from "./MobileMenu";

// emotion
import { ParentMenuContainer } from "./MobileMenu.styled";

const rootModal = document.querySelector(`#mobile-menu`)

// The parent component is made to prohibit 
// scrolling and prevent conflicts with animations

export const ParentComponent = ({ onClose, isOpen }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);


  return createPortal(
    <ParentMenuContainer>
      <MobileMenu onClose={onClose} isOpen={isOpen} />
    </ParentMenuContainer>,
    rootModal
  );
}