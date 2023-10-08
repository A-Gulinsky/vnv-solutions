import { useEffect } from "react";
import { createPortal } from "react-dom";

import { MobileMenu } from "./MobileMenu"; // Импортируйте ваш MobileMenu компонент
import { ParentMenuContainer } from "./MobileMenu.styled";

const rootModal = document.querySelector(`#mobile-menu`)

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
    // Используйте motion.div для анимации
    <ParentMenuContainer>
      <MobileMenu onClose={onClose} isOpen={isOpen} />
    </ParentMenuContainer>,
    rootModal
  );
}