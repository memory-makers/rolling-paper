import { useCallback, useState } from 'react'

import { ModalButton } from '@/components/Modal/ModalItem'
import CreateRoll from '../CreateRoll'
import EditRoll from '../ChangeRoll/EditRoll'

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
      {isModalOpen && <EditRoll setIsModalOpen={setIsModalOpen} />}
    </>
  )
}

export default ModalCallTest
