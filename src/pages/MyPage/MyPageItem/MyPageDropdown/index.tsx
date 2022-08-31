import styles from './myPageDropdown.module.scss'

const MyPageDropDown = ({ isVisible }: { isVisible: boolean }) => {
  const handleClickShare = () => {
    confirm('공유하기를 진행하시겠습니까?')
  }
  const handleClickDelete = () => {
    confirm('삭제하기를 진행하시겠습니까?')
  }
  return (
    <section className={styles.dropdown}>
      <button type="button" onClick={handleClickShare}>
        공유하기
      </button>
      <button type="button" onClick={handleClickDelete}>
        삭제하기
      </button>
      <button type="button">{isVisible ? '모두 보기' : '나만 보기'}</button>
    </section>
  )
}

export default MyPageDropDown
