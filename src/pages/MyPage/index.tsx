import styles from './myPage.module.scss'

const USER_DATA = [
  {
    id: 1,
    title: '3학년 2반 친구들',
    dueDate: '2022.12.16'
  }
]

const MyPage = () => {
  return (
    <div className={styles.myPageContainer}>
      <header className={styles.myPageHeader}>Header Area</header>
      <section>
        <div className={styles.myPageContentTitle}>
          <span>롤링 페이퍼 이름</span>
          <span>오픈 날짜</span>
        </div>
        <div className={styles.myPageContentMain}>
          <div>{USER_DATA[0].title}</div>
          <div>{USER_DATA[0].dueDate}</div>
        </div>
      </section>
    </div>
  )
}

export default MyPage
