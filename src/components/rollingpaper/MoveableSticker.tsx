import React, { useEffect, useState } from 'react'
import StickerType from '@/utils/rollingPaper/Sticker.type'
import classNames from 'classnames'
import styles from './rollingpaper.module.scss'
import { ReactComponent as StickerBorder } from '@/assets/sticker-border.svg'
import { ReactComponent as DeleteIcon } from '@/assets/delete-icn.svg'
import { ReactComponent as RotateIcon } from '@/assets/rotate-icn.svg'
import Moveable, {
  OnDrag,
  OnDragEnd,
  OnDragStart,
  OnResize,
  OnResizeEnd,
  OnResizeStart,
  OnRotate,
  OnRotateEnd,
  OnRotateStart,
  OnScale,
  OnScaleStart
} from 'react-moveable'
import { TRUE } from 'sass'

interface StickerProps {
  sticker: StickerType
  handleUpdateStickers: (newSticker: StickerType) => void
  handleDeleteSticker: (id: string) => void
}
const stringPropertyToNumber = (attr: string) => {
  return parseInt(attr.slice(0, -2))
}

const MoveableSticker = ({ sticker, handleUpdateStickers, handleDeleteSticker }: StickerProps) => {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const [bound, setBounds] = useState({ left: 2000, top: 0, bottom: 0, right: 0 })

  useEffect(() => {
    setTarget(document.querySelector('.target') as HTMLElement)
  }, [])

  const [frame, setFrame] = useState({
    translate: [sticker.x ? sticker.x : 0, sticker.y ? sticker.y : 0],
    rotate: 0
  })
  const [style, setStyle] = useState({
    width: sticker.size ? sticker.size : 60,
    height: sticker.size ? sticker.size : 60,
    backgroundImage: `url(/imgs/${sticker.type}.png)`,
    transform: `rotate(${sticker.rotate ? sticker.rotate : 0}deg)`
  })

  const handleResize = (e: OnResize) => {
    e.delta[0] && (target!.style.width = `${e.width}px`)
    e.delta[1] && (target!.style.height = `${e.height}px`)
  }
  const handleResizeEnd = (e: OnResizeEnd) => {
    target && handleUpdateStickers({ ...sticker, size: e.lastEvent.width })
  }
  const handleRotate = (e: OnRotate) => {
    frame.rotate = e.beforeRotation
    e.target.style.transform = `rotate(${e.beforeRotation}deg)`
  }

  const handleRotateEnd = (e: OnRotateEnd) => {
    // frame.rotate)
  }

  const handleDrag = (e: OnDrag) => {
    e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`
  }

  const handleDragEnd = (e: OnDragEnd) => {
    target &&
      handleUpdateStickers({ ...sticker, x: e.lastEvent.translate[0], y: e.lastEvent.translate[1] })
  }

  return (
    <div className="container">
      <div className={classNames(styles.sticker, styles.rnd, 'target')} style={style}></div>
      <Moveable
        target={target}
        rotatable={true}
        draggable={true}
        keepRatio={true}
        resizable={true}
        origin={true}
        pinchable={true}
        edge={true}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        bounds={bound}
        throttleRotate={0}
        throttleScale={0}
        throttleDrag={0}
        onResizeEnd={handleResizeEnd}
        onResize={handleResize}
        // onRotateStart={handleRotateStart}s
        onRotate={handleRotate}
        OnDragEnd={handleDragEnd}
        onDrag={handleDrag}
        rotationPosition={'bottom-right'}
        dragArea={true}
        padding={{ left: 10, top: 10, right: 10, bottom: 10 }}
      ></Moveable>
    </div>
  )
}

export default MoveableSticker
