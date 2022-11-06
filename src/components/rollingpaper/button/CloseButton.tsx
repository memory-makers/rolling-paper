import React from 'react'
import { ReactComponent as CloseIcon } from '@/assets/close-icn.svg'
import styles from './button.module.scss'

interface CloseButtonProps {
  onClick: () => void
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return <CloseIcon className={styles['close-btn']} onClick={onClick} />
}

export default CloseButton
