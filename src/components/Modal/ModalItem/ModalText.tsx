import { ReactNode } from 'react'
import styles from './modalItem.module.scss'

interface Props {
  size: 'title' | 'label';
  children: ReactNode;
}

const ModalText = ({size, children}: Props) => {
  const text = {
    'title' : <h2 className={styles.modalTitle}>{children}</h2>, 
    'label' : <label className={styles.modalLabel}>{children}</label>
  }[size];

  return (
    <>{text}</>
  )
}

export default ModalText
