import StickerType from '@/utils/rollingPaper/Sticker.type'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from './home.module.scss'

interface StickerProps {
  sticker: StickerType
}

const Sticker = ({ sticker }: StickerProps) => {
  const handleStickerClick = () => {}

  const style = {
    marginLeft: sticker.x,
    top: sticker.y,
    width: `${(sticker.size || 60) / 3.5}%`,
    height: `${(sticker.size || 60) / 3.5}%`,
    backgroundImage: `url(/imgs/${sticker.type}.png)`,
    transform: `rotate(${sticker.rotate || 0}deg)`
  }
  return (
    <div
      className={classNames(styles['sticker'], 'sticker')}
      style={style}
      onClick={handleStickerClick}
    />
  )
}

export default Sticker
