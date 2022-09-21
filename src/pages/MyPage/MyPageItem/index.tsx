import { ReactComponent as EyeOffIcon } from '@/assets/eye-off.svg'
import { ReactComponent as EyeIcon } from '@/assets/eye.svg'
import { ReactComponent as ArrowDownIcon } from '@/assets/arrow-down.svg'
import { ReactComponent as ArrowUpIcon } from '@/assets/arrow-up.svg'
// import { ReactComponent as LockIcon } from '@/assets/lock.svg'

import styles from './myPageItem.module.scss'
import { useEffect, useState } from 'react'
import MyPageDropDown from './MyPageDropdown'
import { convertTimeToDate } from '@/utils/rollingPaper/paper'
interface Props {
  paperId: number
  paperTitle: string
  dueDate: string
  theme: string
  paperUrl: string
}

const MyPageItem = ({ user }: { user: Props }) => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState(false)
  const [dueDate, setDueDate] = useState('')

  const handleClickDropdownList = () => {
    setIsDropdown((prev) => !prev)
  }

  const handleClickVisible = () => {
    setIsVisible((prevState) => !prevState)
  }

  useEffect(() => {
    const newDate = convertTimeToDate(user.dueDate)
    setDueDate(newDate)
  }, [])

  return (
    <div className={styles.myPageMainContent}>
      <div className={styles.roll}>
        <div className={styles.paperInfoWrap}>
          <p>{user.paperTitle}</p>
          <button type="button" onClick={handleClickVisible}>
            {isVisible ? <EyeIcon /> : <EyeOffIcon />}
            {/* <LockIcon  /> */}
          </button>
        </div>
        <div className={styles.openDateWrap}>
          <p>{dueDate}</p>
          <button type="button" onClick={handleClickDropdownList}>
            {isDropdown ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </button>
        </div>
      </div>
      <div className={styles.dropdown}>
        {isDropdown && <MyPageDropDown isVisible={isVisible} />}
      </div>
    </div>
  )
}

export default MyPageItem
