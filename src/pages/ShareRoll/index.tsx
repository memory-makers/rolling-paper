import { ReactNode } from 'react'

import Modal from '@/components/Modal'
import ShareRollItem from './ShareRollItem'

interface Props {
  paperUrl: string
  children: ReactNode
  setIsModalOpen: (state: boolean) => void
}

const ShareRoll = ({ paperUrl, children, setIsModalOpen }: Props) => {
  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ShareRollItem paperUrl={paperUrl} children={children} />
    </Modal>
  )
}

export default ShareRoll
