import { ReactComponent as ShareIcon } from '@/assets/share.svg'
import { BUTTON_SIZE } from '../constants'
import styles from './editorButton.module.scss'

export const ShareButton = () => {
  return (
    <div className={styles['editor-button']}>
      <ShareIcon width={BUTTON_SIZE.width} height={BUTTON_SIZE.width} />
    </div>
  )
}
