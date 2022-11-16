import { ReactNode } from 'react'

import Modal from '@/components/Modal'
import ShareRollItem from './ShareRollItem'

interface Props {
  children: ReactNode
  setIsModalOpen: (state: boolean) => void
}

const ShareRoll = ({ children, setIsModalOpen }: Props) => {
  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ShareRollItem children={children} />
    </Modal>
  )
}

export default ShareRoll
