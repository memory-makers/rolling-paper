import { ReactNode } from 'react'
import styles from './modalItem.module.scss'

interface Props {
  type: 'title' | 'label'
  children: ReactNode
}

const ModalText = ({ type, children }: Props) => {
  const text = {
    title: <h2 className={styles.modalTitle}>{children}</h2>,
    label: <label className={styles.modalLabel}>{children}</label>
  }[type]

  return <>{text}</>
}

export default ModalText
