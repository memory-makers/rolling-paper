import { deletePaperAPI } from '@/api/user'
import Modal from '@/components/Modal'
import { ModalBlock, ModalButton, ModalText } from '@/components/Modal/ModalItem'
import { DELETE_PAPER, usePaper } from '@/store/paper'

interface Props {
  paperId: number
  setIsModalOpen: (state: boolean) => void
}

const DeleteRoll = ({ paperId, setIsModalOpen }: Props) => {
  const { dispatch } = usePaper()

  const handleCancelClick = () => {
    setIsModalOpen(false)
  }
  const handleDeleteClick = () => {
    deletePaperAPI(paperId)
    dispatch({ type: DELETE_PAPER, payload: { paperId } })
    setIsModalOpen(false)
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ModalText type="title">롤링페이퍼를 삭제할까요?</ModalText>
      <ModalBlock>
        <ModalButton type="button" size="small" color="secondary" onClick={handleCancelClick}>
          취소
        </ModalButton>
        <ModalButton type="button" size="small" onClick={handleDeleteClick}>
          삭제
        </ModalButton>
      </ModalBlock>
    </Modal>
  )
}

export default DeleteRoll
