import styles from './myPageItem.module.scss'
import { useState } from 'react'
import cx from 'classnames'
interface Props {
  id: number
  title: string
  dueDate: string
}

const MyPageItem = ({ user }: { user: Props }) => {
  const [onDropdown, setOnDropdown] = useState(false)

  const onClickDropdownList = () => {
    setOnDropdown((prev) => !prev)
  }
  return (
    <div className={styles.myPageMainContent}>
      <div className={styles.paperNameWrap}>
        <p>{user.title}</p>
        <button>
          <img src="/src/assets/eye-off.svg" alt="눈 가림 버튼" />
          {/* <img src="/src/assets/eye.svg" alt="눈 보임 버튼" />
          <img src="/src/assets/lock.svg" alt="자물쇠 잠금 버튼" /> */}
        </button>
      </div>
      <div className={styles.openDateWrap}>
        <p>{user.dueDate}</p>
        <button type="button" onClick={onClickDropdownList}>
          {/* <img src="/src/assets/arrow-down.svg" alt="가리는 토글 버튼" /> */}
          <img src="/src/assets/arrow-up.svg" alt="보여주는 토글 버튼" />
        </button>
      </div>
    </div>
  )
}

export default MyPageItem
