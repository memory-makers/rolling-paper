import { ReactComponent as ArrowDownIcon } from '@/assets/arrow-down.svg'
import { ReactComponent as ArrowUpIcon } from '@/assets/arrow-up.svg'

import styles from './myPageItem.module.scss'
import { useState, useRef, useEffect, BaseSyntheticEvent } from 'react'
import MyPageDropDown from './MyPageDropdown'
import PaperType from '@/utils/rollingPaper/Paper.type'
import { useNavigate } from 'react-router-dom'
interface Props {
  paper: PaperType
}

const MyPageItem = ({ paper }: Props) => {
  const [isDropdown, setIsDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const handleClickDropdownList = () => {
    setIsDropdown(!isDropdown)
  }

  const handleClickMoveToPaperDetail = () => {
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
        <div className={styles.openDateWrap}>
          <p>{paper.dueDate}</p>
          <button type="button" onClick={handleClickDropdownList}>
            {isDropdown ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </button>
        </div>
      </div>
      <MyPageDropDown paper={paper} isDropdown={isDropdown} />
    </div>
  )
}

export default MyPageItem
