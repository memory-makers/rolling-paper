import React from 'react'
import styles from './modalBlock.module.scss'

interface ModalBlockProps {
  children: React.ReactNode
}

const ModalBlock = ({ children }: ModalBlockProps) => {
  return <div className={styles.modalBlock}>{children}</div>
}

export default ModalBlock
