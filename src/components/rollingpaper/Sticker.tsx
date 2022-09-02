import React from 'react'
import StickerType, { StickerShape } from '@/utils/rollingPaper/Sticker.type'
import classNames from 'classnames'
import styles from './rollingpaper.module.scss'

interface StickerProps {
  isFloating?: boolean
  sticker: StickerType
  handleStickerClick?: () => void
}

const Sticker = ({ isFloating, sticker, handleStickerClick }: StickerProps) => {
  const style = {
    left: sticker.x,
    top: sticker.y,
    width: sticker.size || 60,
    height: sticker.size || 60,
    backgroundImage: `url(/imgs/${sticker.type}.png)`,
    transform: `rotate(${sticker.rotate || 0}deg)`
  }
  return (
    <div
      className={classNames(styles.sticker, isFloating && styles['isFloating'])}
      style={style}
      onClick={handleStickerClick}
    />
  )
}

export default Sticker
