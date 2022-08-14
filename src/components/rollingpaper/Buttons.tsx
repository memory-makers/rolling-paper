import React from 'react'
import HeaderButton from '../buttons/HeaderButton'
import { ReactComponent as StickerIcon } from '@/assets/sticker-icn.svg'
import { ReactComponent as ShareIcon } from '@/assets/share-icn.svg'

interface ButtonsProps {
  isCardDetailVisible: boolean
  isModifyMode: boolean
}

const Buttons = ({}: ButtonsProps) => {
  const handleModifyMode = () => {}
  const handleShare = () => {}
  return (
    <div className="header_buttons">
      <HeaderButton handleClick={handleModifyMode} icon={<StickerIcon />} />
      <HeaderButton handleClick={handleShare} icon={<ShareIcon />} />
    </div>
  )
}

export default Buttons
