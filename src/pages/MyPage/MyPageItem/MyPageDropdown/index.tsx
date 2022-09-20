import { useState } from 'react'
import styles from './myPageDropdown.module.scss'

import EditRoll from '@/pages/ChangeRoll/EditRoll'
import DeleteRoll from '@/pages/ChangeRoll/DeleteRoll'

const MyPageDropDown = ({ isVisible }: { isVisible: boolean }) => {
  const paperId = 1 // NOTE: 추후 변경 필요. 상위 setFunction 내려받기. myPage -> dropdown
  const [isEditRollModalOpen, setIsEditRollModalOpen] = useState(false)
  const [isDeleteRollModalOpen, setIsDeleteRollModalOpen] = useState(false)

  const handleClickShare = () => {
    confirm('공유하기를 진행하시겠습니까?')
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
        <EditRoll paperId={paperId} setIsModalOpen={setIsEditRollModalOpen} />
      )}
      {isDeleteRollModalOpen && (
        <DeleteRoll paperId={paperId} setIsModalOpen={setIsDeleteRollModalOpen} />
      )}
    </section>
  )
}

export default MyPageDropDown
