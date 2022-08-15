import React, { useCallback, useState } from 'react'
import styles from './rollingpaper.module.scss'
import StickerType, { StickerShape } from '@/utils/rollingPaper/Sticker.type'
import { ReactComponent as OpenedModal } from '@/assets/opened-modal.svg'
import { ReactComponent as ClosedModal } from '@/assets/closed-modal.svg'
import classNames from 'classnames'
import Sticker from './Sticker'

interface StickerModalProps {
  handleCreateNewSticker: (type: StickerShape) => void
}

const StickerModal = ({ handleCreateNewSticker }: StickerModalProps) => {
  const [isClosed, setIsClosed] = useState(false)
  const handleClose = useCallback(() => setIsClosed(!isClosed), [isClosed])
  return (
    <div className={classNames(styles['sticker-modal'], isClosed && styles['isClosed'])}>
      {isClosed ? <ClosedModal onClick={handleClose} /> : <OpenedModal onClick={handleClose} />}
      <div className={styles['sticker-modal-content']}>
        {Object.keys(StickerShape).map((type) => {
          const attr = { type: type, size: 80 } as StickerType
          return (
            <Sticker
              key={type}
              sticker={attr}
              handleStickerClick={() => handleCreateNewSticker(StickerShape[type])}
            />
          )
        })}
      </div>
    </div>
  )
}

export default StickerModal
