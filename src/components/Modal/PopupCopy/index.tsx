import styles from './popupCopy.module.scss'
import cx from 'classnames'

interface Props {
  isActive: boolean
}

const PopupCopy = ({ isActive }: Props) => {
  return (
    <div className={cx(styles.openFloatMessage, { [styles.isActive]: isActive })}>
      <p>링크 복사 완료!</p>
    </div>
  )
}

export default PopupCopy
