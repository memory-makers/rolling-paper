import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

interface Props {
  setIsModalOpen: (state: boolean) => void;
  children: ReactNode;
}

const Modal = ({ setIsModalOpen, children }: Props) => {
  const modalRoot = document.getElementById("modal") as HTMLDivElement;
  const modalRef = useRef<HTMLDivElement>(null);

  const handleModalOutSideClick = () => {
    setIsModalOpen(false);
  };

  return createPortal(
    <div className={styles.modalContainer} ref={modalRef} onClick={handleModalOutSideClick}>
      <div className={styles.modalBody}>{children}</div>
    </div>,
    modalRoot,
  )
}

export default Modal;
