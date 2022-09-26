import { useEffect, useState } from 'react'
import styles from './myPage.module.scss'

import Header from '@/components/layout/Header'
import MyPageItem from './MyPageItem'
import CreateRoll from '../CreateRoll'
import { getPaperAPI } from '@/api/user'

import { ReactComponent as PaperAirplaneIcon } from '@/assets/paper-airplane.svg'
import { LOAD_PAPER, usePaper } from '@/store/paper'

const MyPage = () => {
  const [isAddRollModalOpen, setIsAddRollModalOpen] = useState(false)
  const { state, dispatch } = usePaper()

  const handleClickAddRoll = () => {
    setIsAddRollModalOpen((prev) => !prev)
  }

  const getData = async () => {
    const papers = await getPaperAPI()
    if (!papers) return
    const usedPapers = papers.map((item) => {
      return {
        paperId: item.paperId,
        paperTitle: item.paperTitle,
        dueDate: item.dueDate,
        theme: item.theme,
        paperUrl: item.paperUrl
      }
    })

    dispatch({ type: LOAD_PAPER, payload: usedPapers })
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
        <div className={styles.myPageContentTitle}>
          <span>롤링 페이퍼 이름</span>
          <span>오픈 날짜</span>
        </div>
        {/* Main Area */}
        {state.map((paper) => (
          <MyPageItem key={paper.paperId} paper={paper} />
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
