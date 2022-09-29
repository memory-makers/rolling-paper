import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './checkSendingCard.module.scss'

import Modal from '@/components/Modal'
import { ModalButton, ModalText } from '@/components/Modal/ModalItem'

interface Props {
  setIsModalOpen: (state: boolean) => void
  callback?: (() => void) | (() => Promise<boolean>) | undefined
}

const CheckSendingCard = ({ setIsModalOpen, callback }: Props) => {
  const navigate = useNavigate()
  const [isFail, setIsFail] = useState(false)

  const handleCancelClick = () => {
    setIsModalOpen(false)
  }
  const handleSendClick = async () => {
    if (!callback) return
    const res = await callback()
    if (!res) {
      setIsFail(true)
      return
    }

    setIsFail(false)
    setIsModalOpen(false)
    navigate('/sending')
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
      <ModalButton type="button" size="small" onClick={handleSendClick}>
        전송
      </ModalButton>
    </Modal>
  )
}

export default CheckSendingCard
