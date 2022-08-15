import { ChangeEventHandler, useState } from 'react'

import Modal from '@/components/Modal'
import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const MakeNickname = ({ setIsModalOpen }: Props) => {
  const [nickname, setNickname] = useState('')

  const handleNicknameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNickname(e.currentTarget.value)
  }
  const handleButtonClick = () => {
    console.log('nickname', nickname)
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ModalText type="title">
        내가 누구인지 알 수 있도록 <br />
        닉네임을 설정해볼까요?
      </ModalText>
      <ModalText type="label">닉네임</ModalText>
      <ModalInput type="text" name="nickname" onChange={handleNicknameChange} />
      <ModalButton type="button" onClick={handleButtonClick}>
        완료
      </ModalButton>
    </Modal>
  )
}

export default MakeNickname
