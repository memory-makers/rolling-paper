import { ReactComponent as PaperAirplaneIcon } from '@/assets/paper-airplane.svg'

import Header from '@/components/layout/Header'
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
      <div className={styles.myPageHeader}>
        <Header text="롤링페이퍼 저장소" type="only-title" />
      </div>
      <>
        <div className={styles.myPageContentTitle}>
          <span>롤링 페이퍼 이름</span>
          <span>오픈 날짜</span>
        </div>
        {/* Main Area */}
        {USER_DATA.map((paper) => (
          <MyPageItem key={paper.id} paper={paper} />
        ))}
      </>
      <button className={styles.paperAddButton}>
        <PaperAirplaneIcon />
      </button>
    </div>
  )
}

export default MyPage
