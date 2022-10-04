import React, { useCallback, useState } from 'react'
import HeaderButton from '../buttons/HeaderButton'
import { ReactComponent as StickerIcon } from '@/assets/sticker-icn.svg'
import { ReactComponent as ShareIcon } from '@/assets/share-icn.svg'
import WriterShareRoll from '@/pages/WriterRoll/WriterShareRoll'

interface ButtonsProps {
  handleModifyMode: () => void
  beforeOpen: boolean
}

const kakao = (window as any).kakao

const Buttons = ({ beforeOpen, handleModifyMode }: ButtonsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClickButton = useCallback(() => {
    setIsModalOpen((prev) => !prev)
  }, [isModalOpen])

  return (
    <div className="header_buttons">
      {beforeOpen && <HeaderButton handleClick={handleModifyMode} icon={<StickerIcon />} />}
      <HeaderButton handleClick={handleClickButton} icon={<ShareIcon />} />
      {isModalOpen && <WriterShareRoll setIsModalOpen={setIsModalOpen} />}
    </div>
  )
}

export default Buttons
