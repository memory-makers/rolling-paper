import styles from './editorButton.module.scss'

interface CompleteButtonProps {
  onClick: () => void
}

export const CompleteButton = ({ onClick }: CompleteButtonProps) => {
  return (
    <div onClick={onClick} className={styles['editor-button']}>
      완료
    </div>
  )
}
