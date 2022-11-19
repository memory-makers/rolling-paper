import { ChangeEvent } from 'react'

import styles from './paper.module.scss'

interface PaperProps {
  value: string | number | undefined
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  backgroundColor: string
  fontFamily: string
  color: string
}

export const Paper = ({ value, onChange, backgroundColor, color, fontFamily }: PaperProps) => {
  return (
    <textarea
      autoFocus
      className={styles['editor-paper']}
      style={{
        backgroundColor,
        color,
        fontFamily
      }}
      value={value}
      onChange={onChange}
      spellCheck={false}
      maxLength={200}
    />
  )
}
