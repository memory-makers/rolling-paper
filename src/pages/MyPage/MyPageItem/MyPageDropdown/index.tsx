import styles from './myPageDropdown.module.scss'
import cx from 'classnames'

const MyPageDropDown = ({
  isVisible,
  isDropdown,
  handleClickVisible
}: {
  isVisible: boolean
  isDropdown: boolean
  handleClickVisible: () => void
}) => {
  const handleClickShare = () => {
    confirm('공유하기를 진행하시겠습니까?')
  }

  const handleClickDelete = () => {
    confirm('삭제하기를 진행하시겠습니까?')
  }

  return (
    <section className={cx(styles.dropdown, { [styles.isActive]: isDropdown })}>
      <button type="button" onClick={handleClickShare}>
        공유하기
      </button>
      <button type="button" onClick={handleClickDelete}>
        삭제하기
      </button>
      <button type="button" onClick={handleClickVisible}>
        {isVisible ? '모두 보기' : '나만 보기'}
      </button>
    </section>
  )
}

export default MyPageDropDown
