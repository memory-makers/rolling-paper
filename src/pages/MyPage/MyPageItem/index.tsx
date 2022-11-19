import { ReactComponent as ArrowDownIcon } from '@/assets/arrow-down.svg'
import { ReactComponent as ArrowUpIcon } from '@/assets/arrow-up.svg'
import { useState, useRef, useEffect, BaseSyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import cx from 'classnames'
import styles from './myPageItem.module.scss'
import { convertTimeAndOffsetToDate } from '@/utils/rollingPaper/paper'

import PaperType from '@/utils/rollingPaper/Paper.type'
import MyPageDropDown from './MyPageDropdown'
import BlockRoll from '@/pages/BlockRoll'
import OpenState from '@/pages/MyPage/MyPageItem/OpenState'

interface Props {
  paper: PaperType
  changeOpenPaperState: (value: boolean) => void
}

const MyPageItem = ({ paper, changeOpenPaperState }: Props) => {
  const [isDropdown, setIsDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isOpened, setIsOpened] = useState(false)
  const openDateRef = useRef<HTMLParagraphElement>(null)
  const [isBlockRollModalOpen, setIsBlockRollModalOpen] = useState(false)
  const navigate = useNavigate()
  const handleClickDropdownList = () => {
    setIsDropdown(!isDropdown)
  }

  const getDiffBetweenDate = (date: string): number => {
    const openDate = new Date(date).getTime() / 1000 / 60 / 60 / 24
    const currentDate = convertTimeAndOffsetToDate()
    return currentDate - openDate
  }

  const handleClickMoveToPaperDetail = () => {
    const diff = getDiffBetweenDate(paper.dueDate)
    if (diff < 0) return setIsBlockRollModalOpen(true)
    navigate(`/rollingpaper/${paper.paperUrl}`)
  }

  useEffect(() => {
    const handleClickCloseDropdown = (e: BaseSyntheticEvent | MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdown(false)
      }
    }
    document.addEventListener('click', handleClickCloseDropdown, true)
    return () => {
      document.removeEventListener('click', handleClickCloseDropdown, true)
    }
  }, [dropdownRef])

  useEffect(() => {
    const date = openDateRef.current?.textContent
    if (!date) return
    const diff = getDiffBetweenDate(date)
    if (diff >= 0) setIsOpened(true)
  }, [isOpened])

  return (
    <div className={styles.myPageMainContent} ref={dropdownRef}>
      <div className={styles.roll}>
        <button
          type="button"
          className={styles.paperInfoWrap}
          onClick={handleClickMoveToPaperDetail}
        >
          <p>{paper.paperTitle}</p>
        </button>
        <div className={styles.openStatusWrap}>
          <OpenState isOpened={isOpened} />
        </div>
        <div className={styles.openDateWrap}>
          <button type="button" onClick={handleClickDropdownList}>
            <p className={styles.dueDate} ref={openDateRef}>
              {paper.dueDate}
            </p>
            {isDropdown ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </button>
        </div>
      </div>
      <div className={styles.dropdownContainer}>
        <MyPageDropDown paper={paper} isDropdown={isDropdown} />
      </div>
      {isBlockRollModalOpen && (
        <BlockRoll date={paper.dueDate} setIsModalOpen={setIsBlockRollModalOpen} />
      )}
    </div>
  )
}

export default MyPageItem
