import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './checkSendingCard.module.scss'

import Modal from '@/components/Modal'
import { ModalBlock, ModalButton, ModalText } from '@/components/Modal/ModalItem'
import { convertUrlToHostData } from '@/utils/rollingPaper/paper'
import { LOAD_URL_NAME, useUrlName } from '@/store/urlNickname'

interface Props {
  setIsModalOpen: (state: boolean) => void
  callback?: (() => void) | (() => Promise<boolean>) | undefined
}

const CheckSendingCard = ({ setIsModalOpen, callback }: Props) => {
  const navigate = useNavigate()
  const { rollingPaperId } = useParams()
  const { dispatch: urlNameDispatch } = useUrlName()
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

    getPaperIdNickname()
    setIsFail(false)
    setIsModalOpen(false)
    navigate('/sending')
  }

  const getPaperIdNickname = async () => {
    if (sessionStorage.getItem('rolling-host')) return

    if (!rollingPaperId) return
    const hostData = await convertUrlToHostData(rollingPaperId)
    if (!hostData) return
    return urlNameDispatch({
      type: LOAD_URL_NAME,
      payload: hostData
    })
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
      <ModalBlock>
        <ModalButton type="button" size="small" color="secondary" onClick={handleCancelClick}>
          취소
        </ModalButton>
        <ModalButton type="button" size="small" onClick={handleSendClick}>
          보내기
        </ModalButton>
      </ModalBlock>
    </Modal>
  )
}

export default CheckSendingCard
