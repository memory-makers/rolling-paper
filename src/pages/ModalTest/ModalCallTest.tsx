import { useCallback, useState } from 'react'

import { ModalButton } from '@/components/Modal/ModalItem'
// import CreateRoll from '../CreateRoll'
// import CheckSendingCard from '../WriterRoll/CheckSendingCard'
// import EditRoll from '../ChangeRoll/EditRoll'
// import DeleteRoll from '../ChangeRoll/DeleteRoll'
// import MakeNickname from '../Nickname/MakeNickname'
// import EditNickname from '../Nickname/EditNickname'
// import CheckLogout from '../CheckLogout'
import ShareRoll from '../ShareRoll'

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
      {/* {isModalOpen && <EditRoll setIsModalOpen={setIsModalOpen} />} */}
      {/* {isModalOpen && <DeleteRoll setIsModalOpen={setIsModalOpen} />} */}
      {/* {isModalOpen && <CheckSendingCard setIsModalOpen={setIsModalOpen} />} */}
      {/* {isModalOpen && <CheckLogout setIsModalOpen={setIsModalOpen} />} */}
      {isModalOpen && (
        <ShareRoll setIsModalOpen={setIsModalOpen} paperUrl="aaa-aaa-aaa">
          롤링페이퍼를 친구들에게 <br /> 작성해달라고 공유해볼까요?
        </ShareRoll>
      )}
    </>
  )
}

export default ModalCallTest
