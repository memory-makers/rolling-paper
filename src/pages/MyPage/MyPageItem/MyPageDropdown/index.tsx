import { useState } from 'react'
import styles from './myPageDropdown.module.scss'

import EditRoll from '@/pages/ChangeRoll/EditRoll'
import DeleteRoll from '@/pages/ChangeRoll/DeleteRoll'
import ChangeShareRoll from '@/pages/ChangeRoll/ChangeShareRoll'

const CLIENT_URL = 'https://rolling-pager-client.vercel.app/rollingpaper/'

const MyPageDropDown = ({ isVisible }: { isVisible: boolean }) => {
  // NOTE: 추후 변경 필요. 상위 setFunction 내려받기. myPage -> dropdown
  const paperId = 1
  const paperUrl = 'asdf-asdf-asdf-asdf'

  const [isShareRollModalOpen, setIsShareRollModalOpen] = useState(false)
  const [isEditRollModalOpen, setIsEditRollModalOpen] = useState(false)
  const [isDeleteRollModalOpen, setIsDeleteRollModalOpen] = useState(false)

  const handleClickShare = () => {
    setIsShareRollModalOpen((prev) => !prev)
  }
  const handleClickEdit = () => {
    setIsEditRollModalOpen((prev) => !prev)
  }
  const handleClickDelete = () => {
    setIsDeleteRollModalOpen((prev) => !prev)
  }
  return (
    <section className={styles.dropdown}>
      <button type="button" onClick={handleClickShare}>
        공유 하기
      </button>
      <button type="button" onClick={handleClickEdit}>
        수정 하기
      </button>
      <button type="button" onClick={handleClickDelete}>
        삭제 하기
      </button>
      <button type="button">{isVisible ? '모두 보기' : '나만 보기'}</button>
      {isEditRollModalOpen && (
        <EditRoll
          paperId={paperId}
          ePaperTitle="3학년 2반 친구들"
          eDueDate="2022-12-16"
          eTheme="dark"
          setIsModalOpen={setIsEditRollModalOpen}
        />
      )}
      {isDeleteRollModalOpen && (
        <DeleteRoll paperId={paperId} setIsModalOpen={setIsDeleteRollModalOpen} />
      )}

      {isShareRollModalOpen && (
        <ChangeShareRoll
          paperUrl={`${CLIENT_URL}${paperUrl}`}
          setIsModalOpen={setIsShareRollModalOpen}
        />
      )}
    </section>
  )
}

export default MyPageDropDown
