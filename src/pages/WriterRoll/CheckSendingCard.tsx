import { useState } from 'react'
import styles from './checkSendingCard.module.scss'

import Modal from '@/components/Modal'
import { ModalButton, ModalText } from '@/components/Modal/ModalItem'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const CheckSendingCard = ({ setIsModalOpen }: Props) => {
  const [isFail, setIsFail] = useState(false)

  const handleCancelClick = () => {
    setIsModalOpen(false)
  }
  const handleDeleteClick = () => {
    // console.log('카드 전송하기 클릭')
    setIsFail(true)
    // setIsModalOpen(false)
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ModalText type="title">
        전송하면 수정할 수 없어요! <br /> 정말로 전송할까요?
      </ModalText>
      {isFail && <p className={styles.errorText}>전송 실패ㅠㅠ 잠시후 다시 시도해 주세요.</p>}
      <ModalButton type="button" size="small" color="secondary" onClick={handleCancelClick}>
        취소
      </ModalButton>
      <ModalButton type="button" size="small" onClick={handleDeleteClick}>
        전송
      </ModalButton>
    </Modal>
  )
}

export default CheckSendingCard
