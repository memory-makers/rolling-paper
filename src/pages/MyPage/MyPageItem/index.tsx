import styles from './myPageItem.module.scss'
import { useState } from 'react'
import MyPageDropDown from './MyPageDropdown'
interface Props {
  id: number
  title: string
  dueDate: string
}

const MyPageItem = ({ user }: { user: Props }) => {
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
          <p>{user.title}</p>
          <button type="button" onClick={handleClickVisible}>
            {isVisible ? (
              <img src="/src/assets/eye.svg" alt="눈 보임 버튼" />
            ) : (
              <img src="/src/assets/eye-off.svg" alt="눈 가림 버튼" />
            )}
            {/* <img src="/src/assets/lock.svg" alt="자물쇠 잠금 버튼" /> */}
          </button>
        </div>
        <div className={styles.openDateWrap}>
          <p>{user.dueDate}</p>
          <button type="button" onClick={handleClickDropdownList}>
            {isDropdown ? (
              <>
                <img src="/src/assets/arrow-down.svg" alt="가리는 토글 버튼" />
              </>
            ) : (
              <img src="/src/assets/arrow-up.svg" alt="보여주는 토글 버튼" />
            )}
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
