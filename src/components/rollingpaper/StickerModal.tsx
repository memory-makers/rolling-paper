import React, { useCallback, useEffect, useState } from 'react'
import styles from './rollingpaper.module.scss'
import StickerType, { StickerShape } from '@/utils/rollingPaper/Sticker.type'
import { ReactComponent as OpenedModal } from '@/assets/opened-modal.svg'
import { ReactComponent as ClosedModal } from '@/assets/closed-modal.svg'
import classNames from 'classnames'
import Sticker from './Sticker'
import Layout from '../layout/Layout'

import { createPortal } from 'react-dom'
interface StickerModalProps {
  handleCreateNewSticker: (type: StickerShape) => void
}

const StickerModal = ({ handleCreateNewSticker }: StickerModalProps) => {
  const [ready, setReady] = useState(false)

  const [isClosed, setIsClosed] = useState(false)
  const handleClose = useCallback(() => setIsClosed(!isClosed), [isClosed])
  const modalRoot = document.querySelector('.layout') as HTMLDivElement

  useEffect(() => {
    setReady(true)
  })
  return ready
    ? createPortal(
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
        </div>,
        modalRoot
      )
    : null
}

export default StickerModal
