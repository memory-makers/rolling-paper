import styles from './myPage.module.scss'
import MyPageItem from './MyPageItem'

const USER_DATA = [
  {
    id: 1,
    title: '3학년 2반 친구들',
    dueDate: '2022.12.16'
  },
  {
    id: 2,
    title: '2022 여름캠프',
    dueDate: '2023.05.01'
  }
]

const MyPage = () => {
  return (
    <div className={styles.myPageContainer}>
      {/* Header Area */}

      <header className={styles.myPageHeader}>Header Area</header>
      <section>
        <div className={styles.myPageContentTitle}>
          <span>롤링 페이퍼 이름</span>
          <span>오픈 날짜</span>
        </div>
        {/* Main Area */}
        {USER_DATA.map((user) => (
          <MyPageItem key={user.id} user={user} />
        ))}
      </section>
      <button className={styles.paperAddButton}>
        <img src="/src/assets/paper-airplane.svg" alt="롤링 페이퍼 생성 버튼 이미지" />
      </button>
    </div>
  )
}

export default MyPage
