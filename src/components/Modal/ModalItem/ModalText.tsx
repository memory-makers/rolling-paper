import { memo, ReactNode } from 'react'
import styles from './modalText.module.scss'

interface Props {
  type: 'title' | 'label' | 'warning'
  children: ReactNode
}

const ModalText = memo(({ type, children }: Props) => {
  const text = {
    title: <h2 className={styles.modalTitle}>{children}</h2>,
    label: <label className={styles.modalLabel}>{children}</label>,
    warning: <p className={styles.modalWarning}>{children}</p>
  }[type]

  return <>{text}</>
})

export default ModalText
