import { ReactNode } from 'react'

import Modal from '@/components/Modal'
import ShareRollItem from './ShareRollItem'

interface Props {
  paperUrl: string | undefined
  children: ReactNode
  setIsModalOpen: (state: boolean) => void
  size?: { width: number; height: number }
}

const ShareRoll = ({ paperUrl, children, setIsModalOpen, size }: Props) => {
  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ShareRollItem paperUrl={paperUrl} children={children} size={size} />
    </Modal>
  )
}

export default ShareRoll
