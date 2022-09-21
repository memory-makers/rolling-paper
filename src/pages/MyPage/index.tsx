import { useEffect, useState } from 'react'
import styles from './myPage.module.scss'

import Header from '@/components/layout/Header'
import MyPageItem from './MyPageItem'
import CreateRoll from '../CreateRoll'
import { getPaperAPI } from '@/api/user'
import PaperType from '@/utils/rollingPaper/Paper.type'

import { ReactComponent as PaperAirplaneIcon } from '@/assets/paper-airplane.svg'

const MyPage = () => {
  const [isAddRollModalOpen, setIsAddRollModalOpen] = useState(false)
  const [papers, setPapers] = useState<PaperType[]>([])
  const handleClickAddRoll = () => {
    setIsAddRollModalOpen((prev) => !prev)
  }

  const getData = async () => {
    const { result } = await getPaperAPI()
    setPapers(result)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.myPageContainer}>
      {/* Header Area */}
      <div className={styles.myPageHeader}>
        <Header text="롤링페이퍼 저장소" type="only-title" />
      </div>
      <section>
        <div className={styles.myPageContentTitle}>
          <span>롤링 페이퍼 이름</span>
          <span>오픈 날짜</span>
        </div>
        {/* Main Area */}
        {papers.map((user) => (
          <MyPageItem key={user.paperId} user={user} />
        ))}
      </section>
      <button className={styles.paperAddButton} onClick={handleClickAddRoll}>
        <PaperAirplaneIcon />
      </button>
      {isAddRollModalOpen && <CreateRoll setIsModalOpen={setIsAddRollModalOpen} />}
    </div>
  )
}

export default MyPage
