import { useCallback, useState } from 'react'

import { ModalButton } from '@/components/Modal/ModalItem'
import CreateRoll from '../CreateRoll'
import CheckSendingCard from '../WriterRoll/CheckSendingCard'
import WriterShareRoll from '../WriterRoll/WriterShareRoll'
import EditRoll from '../ChangeRoll/EditRoll'
import ChangeShareRoll from '../ChangeRoll/ChangeShareRoll'
import DeleteRoll from '../ChangeRoll/DeleteRoll'
import MakeNickname from '../Nickname/MakeNickname'
import EditNickname from '../Nickname/EditNickname'
import CheckLogout from '../CheckLogout'

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
      {/* {isModalOpen && <EditNickname setIsModalOpen={setIsModalOpen} />} */}
      {/* {isModalOpen && <CheckSendingCard setIsModalOpen={setIsModalOpen} />} */}
      {/* {isModalOpen && <WriterShareRoll setIsModalOpen={setIsModalOpen} paperUrl="user.paperUrl" />} */}
      {/* {isModalOpen && <EditRoll setIsModalOpen={setIsModalOpen} />} */}
      {/* {isModalOpen && (
        <ChangeShareRoll setIsModalOpen={setIsModalOpen} paperUrl={'user.paperUrl'} />
      )} */}
      {/* {isModalOpen && <DeleteRoll setIsModalOpen={setIsModalOpen} />} */}
      {/* {isModalOpen && <CheckSendingCard setIsModalOpen={setIsModalOpen} />} */}
      {isModalOpen && <CheckLogout setIsModalOpen={setIsModalOpen} />}
    </>
  )
}

export default ModalCallTest
