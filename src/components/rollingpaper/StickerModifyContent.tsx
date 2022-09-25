import React from 'react'
import StickerType, { StickerShape } from '@/utils/rollingPaper/Sticker.type'
import RndSticker from './RndSticker'
import styles from './rollingpaper.module.scss'
import StickerModal from './StickerModal'
import MoveableSticker from './MoveableSticker'
interface ContentProps {
  newStickers: StickerType[]
  setNewStickers: (newStickers: StickerType[]) => void
}

const StickerModifyContent = ({ newStickers, setNewStickers }: ContentProps) => {
  const handleCreateNewSticker = (type: StickerShape) => {
    const newSticker = {
      id: Math.floor(Math.random() * 1000),
      size: 60,
      type: type,
      paperId: 1,
      x: 0,
      y: 0
    } as StickerType
    setNewStickers([...newStickers, newSticker])
  }
  const handleUpdateStickers = (newSticker: StickerType) => {
    setNewStickers([...newStickers.filter((sticker) => sticker.id !== newSticker.id), newSticker])
  }
  const handleDeleteSticker = (id: number) => {
    setNewStickers([...newStickers.filter((sticker) => sticker.id !== id)])
  }
  return (
    <div className={styles['sticker-modify-content']}>
      <div className={styles['sticker-container']}>
        {newStickers.map((sticker) => (
          <MoveableSticker
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
