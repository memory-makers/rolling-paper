import React, { useState } from 'react'
import StickerType from '@/utils/rollingPaper/Sticker.type'
import classNames from 'classnames'
import styles from './rollingpaper.module.scss'
import { Rnd } from 'react-rnd'
import { ReactComponent as StickerBorder } from '@/assets/sticker-border.svg'
import { ReactComponent as DeleteIcon } from '@/assets/delete-icn.svg'
import { ReactComponent as RotateIcon } from '@/assets/rotate-icn.svg'

interface StickerProps {
  sticker: StickerType
  handleUpdateStickers: (newSticker: StickerType) => void
  handleDeleteSticker: (id: number) => void
}
const stringPropertyToNumber = (attr: string) => {
  return parseInt(attr.slice(0, -2))
}

const RndSticker = ({ sticker, handleUpdateStickers, handleDeleteSticker }: StickerProps) => {
  const [style, setStyle] = useState({
    x: sticker.x ? sticker.x : 0,
    y: sticker.y ? sticker.y : 0,
    width: sticker.size ? sticker.size : 60,
    height: sticker.size ? sticker.size : 60,
    backgroundImage: `url(/imgs/${sticker.type}.png)`,
    transform: `rotate(${sticker.rotate ? sticker.rotate : 0}deg)`
  })
  return (
    <Rnd
      className={classNames(styles.sticker, styles.rnd)}
      style={style}
      size={{ width: style.width, height: style.height }}
      position={{ x: style.x, y: style.y }}
      minHeight={10}
      minWidth={10}
      maxHeight={100}
      maxWidth={100}
      lockAspectRatio={true}
      scale={sticker.scale ? sticker.scale : 1}
      onDragStop={(e, d) => {
        setStyle({ ...style, x: d.x, y: d.y })
        handleUpdateStickers({ ...sticker, x: d.x, y: d.y })
        console.log(e, d)
      }}
      bounds={'parent'}
      onResizeStop={(e, direction, ref, delta, position) => {
        const newWidth = stringPropertyToNumber(ref.style.width)
        const newHeight = stringPropertyToNumber(ref.style.height)
        setStyle({
          ...style,
          width: newWidth,
          height: newHeight
        })
        handleUpdateStickers({ ...sticker, size: newWidth })
      }}
    >
      <StickerBorder
        className={styles['border']}
        style={{ width: style.width + 20, height: style.height + 20 }}
      />

      <DeleteIcon
        className={styles['delete-icn']}
        onClick={() => handleDeleteSticker(sticker.id)}
      />
      <RotateIcon className={styles['rotate-icn']} />
    </Rnd>
  )
}

export default RndSticker
