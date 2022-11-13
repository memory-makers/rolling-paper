import styles from './openState.module.scss'
import cx from 'classnames'

const OpenState = ({ isOpened }: any) => {
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
