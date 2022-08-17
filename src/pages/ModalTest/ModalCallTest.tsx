import { useCallback, useState } from 'react'

import { ModalButton } from '@/components/Modal/ModalItem'
import CreateRoll from '../CreateRoll'
import MakeNickname from '../Nickname/MakeNickname'
import EditNickname from '../Nickname/EditNickname'

const ModalCallTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClickButton = useCallback(() => {
    setIsModalOpen((prev) => !prev)
  }, [isModalOpen])

  return (
    <>
      <ModalButton type="button" onClick={handleClickButton}>
        ModalCallTest
      </ModalButton>
      {/* {isModalOpen && <CreateRoll setIsModalOpen={setIsModalOpen} />} */}
      {/* {isModalOpen && <MakeNickname setIsModalOpen={setIsModalOpen} />} */}
      {isModalOpen && <EditNickname setIsModalOpen={setIsModalOpen} />}
    </>
  )
}

export default ModalCallTest
