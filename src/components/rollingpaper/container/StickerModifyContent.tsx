import React from 'react'
import StickerType, { StickerShape } from '@/utils/rollingPaper/Sticker.type'
import styles from './rollingpaper.module.scss'
import StickerModal from '../modal/StickerModal'
import MoveableSticker from '../sticker/MoveableSticker'
import classNames from 'classnames'
import { ReactZoomPanPinchHandlers } from 'react-zoom-pan-pinch'
interface ContentProps {
  isModifyMode: boolean
  newStickers: StickerType[]
  setNewStickers: (newStickers: StickerType[]) => void
  setTransform?: any
}

const StickerModifyContent = ({
  setTransform,
  isModifyMode,
  newStickers,
  setNewStickers
}: ContentProps) => {
  const modifyMode = isModifyMode ? 'modify-mode' : ''
  const handleCreateNewSticker = (type: StickerShape) => {
    const newSticker = {
      id: Math.floor(Math.random() * 1000),
      size: 60,
      type: type,
      paperId: 1,
      x: 100,
      y: 100
    } as StickerType
    setNewStickers([...newStickers, newSticker])
    setTransform(100, 100, 1, 300, 'easeOut')
  }
  const handleUpdateStickers = (newSticker: StickerType) => {
    setNewStickers([...newStickers.filter((sticker) => sticker.id !== newSticker.id), newSticker])
  }
  const handleDeleteSticker = (id: number) => {
    setNewStickers([...newStickers.filter((sticker) => sticker.id !== id)])
  }
  return (
    <div className={classNames(styles['sticker-modify-content'], styles[modifyMode])}>
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
      {isModifyMode && <StickerModal handleCreateNewSticker={handleCreateNewSticker} />}
    </div>
  )
}

export default StickerModifyContent
