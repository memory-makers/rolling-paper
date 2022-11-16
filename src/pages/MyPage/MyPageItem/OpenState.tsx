import styles from './openState.module.scss'
import cx from 'classnames'

interface Props {
  isOpened: boolean
}

const OpenState = ({ isOpened }: Props) => {
  const openState = {
    false: '오픈전',
    true: '오픈'
  }
  return (
    <div className={cx(styles.openState, { [styles.isOpened]: isOpened })}>
      {openState[`${isOpened}`]}
    </div>
  )
}

export default OpenState
