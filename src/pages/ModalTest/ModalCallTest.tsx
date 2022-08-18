import { useCallback, useState } from 'react'

import { ModalButton } from '@/components/Modal/ModalItem'
import CreateRoll from '../CreateRoll'
import CheckSendingCard from '../WriterRoll/CheckSendingCard'
import WriterShareRoll from '../WriterRoll/WriterShareRoll'

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
      {/* {isModalOpen && <CheckSendingCard setIsModalOpen={setIsModalOpen} />} */}
      {isModalOpen && <WriterShareRoll setIsModalOpen={setIsModalOpen} paperUrl="user.paperUrl" />}
    </>
  )
}

export default ModalCallTest
