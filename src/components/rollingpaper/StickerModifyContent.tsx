import CardType from '@/utils/rollingPaper/Card.type'
import cardDummy from '@/utils/rollingPaper/cardDummy'
import StickerType, { StickerShape } from '@/utils/rollingPaper/Sticker.type'
import React from 'react'
import Card from './Card'
import RndSticker from './RndSticker'
import styles from './rollingpaper.module.scss'
import Sticker from './Sticker'
import StickerModal from './StickerModal'
interface ContentProps {
  newStickers: StickerType[]
  setNewStickers: (newStickers: StickerType[]) => void
}

const StickerModifyContent = ({ newStickers, setNewStickers }: ContentProps) => {
  const handleCreateNewSticker = (type: StickerShape) => {
    const newSticker = {
      id: (Math.random() * 100).toString(),
      size: 60,
      type: type,
      paperId: '1'
    } as StickerType
    setNewStickers([...newStickers, newSticker])
  }
  const handleUpdateStickers = (newSticker: StickerType) => {
    console.log(newSticker)
    setNewStickers([...newStickers.filter((sticker) => sticker.id !== newSticker.id), newSticker])
  }
  const handleDeleteSticker = (id: string) => {
    setNewStickers([...newStickers.filter((sticker) => sticker.id !== id)])
  }
  return (
    <div className={styles['sticker-content']}>
      <div className={styles['sticker-content']}>
        {newStickers.map((sticker) => (
          <RndSticker
            key={sticker.id}
            sticker={sticker}
            handleUpdateStickers={handleUpdateStickers}
            handleDeleteSticker={handleDeleteSticker}
          />
        ))}
      </div>
      <StickerModal handleCreateNewSticker={handleCreateNewSticker} />
    </div>
  )
}

export default StickerModifyContent
