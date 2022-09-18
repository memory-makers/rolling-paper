import React from 'react'
import HeaderButton from '../buttons/HeaderButton'
import { ReactComponent as StickerIcon } from '@/assets/sticker-icn.svg'
import { ReactComponent as ShareIcon } from '@/assets/share-icn.svg'

interface ButtonsProps {
  handleModifyMode: () => void
}

const Buttons = ({ handleModifyMode }: ButtonsProps) => {
  const handleShare = () => {}
  return (
    <div className="header_buttons">
      <HeaderButton handleClick={handleModifyMode} icon={<StickerIcon />} />
      <HeaderButton handleClick={handleShare} icon={<ShareIcon />} />
    </div>
  )
}

export default Buttons
