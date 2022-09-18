import { ChangeEventHandler, FormEvent, useState } from 'react'

import Modal from '@/components/Modal'
import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem'
import { setNicknameAPI } from '@/api/user'

interface Props {
  setName: (state: string) => void
  setIsModalOpen: (state: boolean) => void
}

const MakeNickname = ({ setName, setIsModalOpen }: Props) => {
  const [nickname, setNickname] = useState('')

  const handleNicknameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNickname(e.currentTarget.value)
  }
  const handleSubmitSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setName(nickname)
    setNicknameAPI(nickname)
    setIsModalOpen(false)
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <form onSubmit={handleSubmitSave}>
        <ModalText type="title">
          내가 누구인지 알 수 있도록 <br />
          닉네임을 설정해볼까요?
        </ModalText>
        <ModalText type="label">닉네임</ModalText>
        <ModalInput type="text" name="nickname" onChange={handleNicknameChange} />
        <ModalButton type="submit">완료</ModalButton>
      </form>
    </Modal>
  )
}

export default MakeNickname
