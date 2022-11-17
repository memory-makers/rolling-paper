import styles from './popup.module.scss'
import cx from 'classnames'

interface Props {
  isActive: boolean
  content: string
}

const Popup = ({ isActive, content }: Props) => {
  return (
    <div className={cx(styles.openFloatMessage, { [styles.isActive]: isActive })}>
      <p>{content}</p>
    </div>
  )
}

export default Popup
