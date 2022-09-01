import React, { useEffect, useState } from 'react'
import StickerType, { StickerShape } from '@/utils/rollingPaper/Sticker.type'
import classNames from 'classnames'
import styles from './rollingpaper.module.scss'
import { ReactComponent as StickerBorder } from '@/assets/sticker-border.svg'
import { ReactComponent as DeleteIcon } from '@/assets/delete-icn.svg'
import { ReactComponent as RotateIcon } from '@/assets/rotate-icn.svg'
import Moveable, {
  OnDrag,
  OnDragEnd,
  OnDragStart,
  OnRotate,
  OnRotateEnd,
  OnRotateStart,
  OnScale,
  OnScaleEnd,
  OnScaleStart
} from 'react-moveable'

interface StickerProps {
  sticker: StickerType
  handleUpdateStickers: (newSticker: StickerType) => void
  handleDeleteSticker: (id: string) => void
}

const getStyle = (rotate: number | undefined, type: string) => {
  return {
    backgroundImage: `url(/imgs/${type}.png)`
  }
}

const MoveableSticker = ({ sticker, handleUpdateStickers, handleDeleteSticker }: StickerProps) => {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const [bounds, setBounds] = useState({ x: 380, y: 50 })
  useEffect(() => {
    setTarget(document.querySelector('.target')! as HTMLElement)
    const layout = document.querySelector('.layout') as HTMLElement
    layout &&
      setBounds({
        x: layout.clientWidth - 60,
        y: layout.clientHeight - 200
      })
  }, [])

  const [style, setStyle] = useState({
    scale: [sticker.scale || 1, sticker.scale || 1],
    rotate: sticker.rotate || 1,
    translate: [sticker.x || 0, sticker.y || 0]
  })
  //scale event
  const handleScaleStart = (e: OnScaleStart) => {
    e.set(style.scale)
    e.dragStart && e.dragStart.set(style.translate)
  }
  const handleScale = (e: OnScale) => {
    const beforeTranslate = e.drag.beforeTranslate
    style.translate = beforeTranslate
    style.scale = e.scale
    e.target.style.transform =
      `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)` +
      `scale(${e.scale[0]}, ${e.scale[1]})` +
      `rotate(${style.rotate}deg)`
  }
  const handleScaleEnd = (e: OnScaleEnd) => {
    if (e.lastEvent) {
      style.translate = e.lastEvent.drag.beforeTranslate
      style.scale = e.lastEvent.scale
      console.log(e.target)
      // handleUpdateStickers({ ...sticker, scale: e.lastEvent.scale[0] })
    }
  }

  //rotate event
  const handleRotateStart = (e: OnRotateStart) => {
    e.set(style.rotate)
  }
  const handleRotate = (e: OnRotate) => {
    style.rotate = e.beforeRotation
    e.target.style.transform =
      `translate(${style.translate[0]}px, ${style.translate[1]}px)` +
      `scale(${style.scale[0]}, ${style.scale[1]})` +
      `rotate(${e.beforeRotation}deg)`
  }
  const handleRotateEnd = (e: OnRotateEnd) => {
    if (e.lastEvent) {
      console.log(e.target)
      style.rotate = e.lastEvent.beforeRotate
      // handleUpdateStickers({ ...sticker, rotate: e.lastEvent.rotate })
    }
  }

  // drag event
  const handleDragStart = (e: OnDragStart) => {
    e.set(style.translate)
  }
  const handleDrag = (e: OnDrag) => {
    e.target.style.transform =
      `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)` +
      `scale(${style.scale[0]}, ${style.scale[1]})` +
      `rotate(${style.rotate}deg)`
  }
  const handleDragEnd = (e: OnDragEnd) => {
    if (e.lastEvent) {
      console.log(e.target)
      style.translate = e.lastEvent.beforeTranslate
      // handleUpdateStickers({ ...sticker, x: e.lastEvent.translate[0], y: e.lastEvent.translate[1] })
    }
  }

  return (
    <div className="container">
      <DeleteIcon
        className={styles['delete-icn']}
        onClick={() => handleDeleteSticker(sticker.id)}
      />
      <div
        className={classNames(styles.sticker, 'target')}
        style={getStyle(sticker.rotate, sticker.type)}
      ></div>
      <Moveable
        target={target}
        rotatable={true}
        draggable={true}
        keepRatio={true}
        snappable={true}
        origin={true}
        pinchable={true}
        edge={true}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        bounds={{ left: 0, top: 0, right: bounds.x, bottom: bounds.y }}
        throttleRotate={0}
        throttleDrag={0}
        scalable={true}
        throttleScale={0}
        onScaleStart={handleScaleStart}
        onRotateStart={handleRotateStart}
        onDragtart={handleDragStart}
        onScale={handleScale}
        onRotate={handleRotate}
        onDrag={handleDrag}
        onScaleEnd={handleScaleEnd}
        onRotateEnd={handleRotateEnd}
        OnDragEnd={handleDragEnd}
        rotationPosition={'bottom-right'}
        dragArea={true}
        padding={{ left: 10, top: 10, right: 10, bottom: 10 }}
      ></Moveable>
    </div>
  )
}

export default MoveableSticker
