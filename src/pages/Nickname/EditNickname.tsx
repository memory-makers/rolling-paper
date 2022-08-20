import { ChangeEventHandler, useEffect, useState } from 'react'

import Modal from '@/components/Modal'
import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const EditNickname = ({ setIsModalOpen }: Props) => {
  const [nickname, setNickname] = useState('')

  const handleNicknameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNickname(e.currentTarget.value)
  }
  const handleButtonClick = () => {
    // console.log('nickname 수정 DB저장', nickname)
    setIsModalOpen(false)
  }

  useEffect(() => {
    setNickname('레몬')
  }, [])

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <form>
        <ModalText type="title">
          내가 누구인지 알 수 있도록 <br />
          닉네임을 변경해볼까요?
        </ModalText>
        <ModalText type="label">닉네임</ModalText>
        <ModalInput type="text" name="nickname" value={nickname} onChange={handleNicknameChange} />
        <ModalButton type="button" onClick={handleButtonClick}>
          완료
        </ModalButton>
      </form>
    </Modal>
  )
}

export default EditNickname
