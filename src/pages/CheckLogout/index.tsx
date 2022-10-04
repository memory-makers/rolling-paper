import { useNavigate } from 'react-router-dom'

import Modal from '@/components/Modal'
import { ModalButton, ModalText } from '@/components/Modal/ModalItem'
import tokenStore from '@/api/tokenStore'
import { logout_API } from '@/api'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const CheckLogout = ({ setIsModalOpen }: Props) => {
  const navigate = useNavigate()

  const handleCancelClick = () => {
    setIsModalOpen(false)
  }
  const handleDeleteClick = () => {
    tokenStore.clearToken()
    logout_API()
    navigate('/')
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
