import styles from './openState.module.scss'
import cx from 'classnames'

interface Props {
  isOpened: boolean
}

const OpenState = ({ isOpened }: Props) => {
  const openState = {
    false: '마감전',
    true: '마감'
  }
  return (
    <div className={cx(styles.openState, { [styles.isOpened]: isOpened })}>
      {openState[`${isOpened}`]}
    </div>
  )
}

export default OpenState
