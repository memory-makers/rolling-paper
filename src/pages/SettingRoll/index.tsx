import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './settingRoll.module.scss'

import CheckLogout from '../CheckLogout'
import EditNickname from '../Nickname/EditNickname'
import { ArrowLeftIcon, NextIcon } from '@/assets'

const SettingRoll = () => {
  const navigate = useNavigate()
  const [isEditNicknameModalOpen, setIsEditNicknameModalOpen] = useState(false)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const handleClickGoBack = () => {
    navigate('/mypage')
  }

  const handleClickEditNicknameModal = () => {
    setIsEditNicknameModalOpen((prev) => !prev)
  }

  const handleClickContacts = () => {
    window.location.href = 'https://www.instagram.com/rolling_paper_makers'
  }
  const handleClickDonate = () => {
    window.location.href = 'https://www.buymeacoffee.com/rollingpaper'
  }

  const handleClickLogout = () => {
    setIsLogoutModalOpen((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <header className={styles.settingHeader}>
        <button type="button" className={styles.backArrow} onClick={handleClickGoBack}>
          <ArrowLeftIcon />
          <span>마이페이지</span>
        </button>
      </header>
      <div className={styles.contents}>
        <h2 className={styles.title}>설정</h2>
        <div className={styles.buttonWrapper}>
          <button type="button" onClick={handleClickEditNicknameModal}>
            <span>닉네임 바꾸기</span>
            <NextIcon />
          </button>
          <button type="button" onClick={handleClickContacts}>
            <span>인스타그램 구경하기</span>
            <NextIcon />
          </button>
          <button type="button" onClick={handleClickDonate}>
            <span>개발자에게 따뜻한 커피를</span>
            <NextIcon />
          </button>
          <button type="button" onClick={handleClickLogout}>
            <span>로그아웃</span>
            <NextIcon />
          </button>
        </div>
      </div>

      {isEditNicknameModalOpen && <EditNickname setIsModalOpen={setIsEditNicknameModalOpen} />}
      {isLogoutModalOpen && <CheckLogout setIsModalOpen={setIsLogoutModalOpen} />}
    </div>
  )
}

export default SettingRoll
