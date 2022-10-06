import Modal from '@/components/Modal'
import { ModalButton, ModalText } from '@/components/Modal/ModalItem'
import { KAKAO_LOGOUT_URL } from '@/api/user'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const CheckLogout = ({ setIsModalOpen }: Props) => {
  const handleCancelClick = () => {
    setIsModalOpen(false)
  }
  const handleDeleteClick = () => {
    window.location.replace(KAKAO_LOGOUT_URL)
    setIsModalOpen(false)
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ModalText type="title">로그아웃 하시겠습니까?</ModalText>
      <ModalButton type="button" size="small" color="secondary" onClick={handleCancelClick}>
        취소
      </ModalButton>
      <ModalButton type="button" size="small" onClick={handleDeleteClick}>
        로그아웃
      </ModalButton>
    </Modal>
  )
}

export default CheckLogout
