import { ChangeEventHandler, FormEvent, useState } from 'react'

import Modal from '@/components/Modal'
import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem'
import { setNicknameAPI } from '@/api/user'
import { EDIT_NAME, useName } from '@/store/nickname'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const MakeNickname = ({ setIsModalOpen }: Props) => {
  const { dispatch: nameDispatch } = useName()
  const [nickname, setNickname] = useState('')
  const [message, setMessage] = useState('')

  const handleNicknameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNickname(e.currentTarget.value)
  }
  const handleSubmitSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!nickname) return setMessage('닉네임을 입력해주세요!')
    const newNickname = nickname.trim()
    if (!newNickname) return setMessage('공백이 아닌 내용을 입력해주세요!')
    nameDispatch({ type: EDIT_NAME, payload: newNickname })
    setNicknameAPI(newNickname)
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
        <ModalInput type="text" name="nickname" maxLength={12} onChange={handleNicknameChange} />
        <ModalText type="warning">{message}</ModalText>
        <ModalButton type="submit">완료</ModalButton>
      </form>
    </Modal>
  )
}

export default MakeNickname
