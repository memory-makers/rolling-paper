import { useEffect, useState, useRef } from 'react'
import styles from './myPage.module.scss'
import cx from 'classnames'
import Header from '@/components/layout/Header'
import MyPageItem from './MyPageItem'
import CreateRoll from '../CreateRoll'
import { getPaperAPI } from '@/api/user'

import { ReactComponent as PaperAirplaneIcon } from '@/assets/paper-airplane.svg'
import { LOAD_PAPER, usePaper } from '@/store/paper'

const MyPage = () => {
  const [isAddRollModalOpen, setIsAddRollModalOpen] = useState(false)
  const [isOpenPaper, setIsOpenPaper] = useState(false)
  const { state, dispatch } = usePaper()
  const mounted = useRef(false)

  const changeOpenPaperState = (value: boolean) => {
    setIsOpenPaper(value)
  }

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

  useEffect(() => {
    if (mounted.current) {
      const timer = setTimeout(() => {
        changeOpenPaperState(false)
      }, 1500)
      return () => {
        clearTimeout(timer)
      }
    } else {
      mounted.current = true
    }
  }, [isOpenPaper])

  return (
    <div className={styles.myPageContainer}>
      <div className={styles.myPageHeader}>
        <Header text="롤링페이퍼 저장소" type="only-title" />
      </div>
      <section className={styles.myPageMain}>
        <div className={styles.myPageContentTitle}>
          <span className={styles.paperName}>롤링 페이퍼 이름</span>
          <span className={styles.openStatus}>상태</span>
          <span className={styles.openDate}>오픈 날짜</span>
        </div>
        <div className={styles.paperList}>
          {state.map((paper) => (
            <MyPageItem
              key={paper.paperId}
              paper={paper}
              changeOpenPaperState={changeOpenPaperState}
            />
          ))}
        </div>
      </section>
      <button className={styles.paperAddButton} onClick={handleClickAddRoll}>
        <PaperAirplaneIcon />
      </button>
      {isAddRollModalOpen && <CreateRoll setIsModalOpen={setIsAddRollModalOpen} />}
      {
        <div className={cx(styles.openFloatMessage, { [styles.isActive]: isOpenPaper })}>
          <p>해당 롤링페이퍼는</p>
          <p>아직 오픈 날짜가 안지났어요~</p>
        </div>
      }
    </div>
  )
}

export default MyPage
