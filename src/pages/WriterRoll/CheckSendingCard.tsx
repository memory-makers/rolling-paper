import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './checkSendingCard.module.scss'

import Modal from '@/components/Modal'
import { ModalButton, ModalText } from '@/components/Modal/ModalItem'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const CheckSendingCard = ({ setIsModalOpen }: Props) => {
  const navigate = useNavigate()
  const [isFail, setIsFail] = useState(false)

  const handleCancelClick = () => {
    setIsModalOpen(false)
  }
  const handleSendClick = () => {
    // console.log('카드 전송하기 클릭')
    // setIsFail(true)
    setIsModalOpen(false)
    navigate('/sending')
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <p className={styles.subText}>* 작성한 카드는 전체 공개됩니다.</p>
      <ModalText type="title">
        한번 보내면 수정할 수 없어요 <br /> 정말로 카드를 보낼까요?
      </ModalText>
      {isFail && (
        <p className={styles.errorText}>
          이런! 문제가 생겼어요. <br />
          잠시후 다시 시도해 주세요!
        </p>
      )}
      <ModalButton type="button" size="small" color="secondary" onClick={handleCancelClick}>
        취소
      </ModalButton>
      <ModalButton type="button" size="small" onClick={handleSendClick}>
        보내기
      </ModalButton>
    </Modal>
  )
}

export default CheckSendingCard
