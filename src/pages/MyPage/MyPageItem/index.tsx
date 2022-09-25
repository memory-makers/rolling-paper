import { ReactComponent as EyeOffIcon } from '@/assets/eye-off.svg'
import { ReactComponent as EyeIcon } from '@/assets/eye.svg'
import { ReactComponent as ArrowDownIcon } from '@/assets/arrow-down.svg'
import { ReactComponent as ArrowUpIcon } from '@/assets/arrow-up.svg'
// import { ReactComponent as LockIcon } from '@/assets/lock.svg'

import styles from './myPageItem.module.scss'
import { useState } from 'react'
import MyPageDropDown from './MyPageDropdown'
import PaperType from '@/utils/rollingPaper/Paper.type'

interface Props {
  paper: PaperType
}

const MyPageItem = ({ paper }: Props) => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleClickDropdownList = () => {
    setIsDropdown((prev) => !prev)
  }

  const handleClickVisible = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <div className={styles.myPageMainContent}>
      <div className={styles.roll}>
        <div className={styles.paperInfoWrap}>
          <p>{paper.paperTitle}</p>
          <button type="button" onClick={handleClickVisible}>
            {isVisible ? <EyeIcon /> : <EyeOffIcon />}
            {/* <LockIcon  /> */}
          </button>
        </div>
        <div className={styles.openDateWrap}>
          <p>{paper.dueDate}</p>
          <button type="button" onClick={handleClickDropdownList}>
            {isDropdown ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </button>
        </div>
      </div>
      <div className={styles.dropdown}>
        {isDropdown && <MyPageDropDown paper={paper} isVisible={isVisible} />}
      </div>
    </div>
  )
}

export default MyPageItem
