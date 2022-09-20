import { deletePaperAPI } from '@/api/user'
import Modal from '@/components/Modal'
import { ModalButton, ModalText } from '@/components/Modal/ModalItem'

interface Props {
  paperId: number
  setIsModalOpen: (state: boolean) => void
}

const DeleteRoll = ({ paperId, setIsModalOpen }: Props) => {
  const handleCancelClick = () => {
    setIsModalOpen(false)
  }
  const handleDeleteClick = () => {
    deletePaperAPI(paperId)
    setIsModalOpen(false)
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ModalText type="title">롤링페이퍼를 삭제할까요?</ModalText>
      <ModalButton type="button" size="small" color="secondary" onClick={handleCancelClick}>
        취소
      </ModalButton>
      <ModalButton type="button" size="small" onClick={handleDeleteClick}>
        삭제
      </ModalButton>
    </Modal>
  )
}

export default DeleteRoll
