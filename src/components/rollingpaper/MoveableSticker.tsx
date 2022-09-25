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
  OnResize,
  OnResizeEnd,
  OnResizeStart,
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
  handleDeleteSticker: (id: number) => void
}

const getStickerStyle = (type: string, id: number) => {
  return {
    backgroundImage: `url(/imgs/${type}.png)`,
    zIndex: `${id}`
  }
}

const MoveableSticker = ({ sticker, handleUpdateStickers, handleDeleteSticker }: StickerProps) => {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const [bounds, setBounds] = useState({ x: 380, y: 50 })
  const [style, setStyle] = useState({
    rotate: sticker.rotate || 1,
    translate: [sticker.x || 0, sticker.y || 0],
    size: sticker.size || 60
  })
  useEffect(() => {
    const target = document.querySelector(`.sticker-${sticker.id}`)! as HTMLElement
    target.style.width = `${style.size}px`
    target.style.height = `${style.size}px`
    target.style.transform =
      `translate(${style.translate[0]}px, ${style.translate[1]}px)` + `rotate(${style.rotate}deg)`
    setTarget(target)
    const layout = document.querySelector('.layout') as HTMLElement
    layout &&
      setBounds({
        x: layout.clientWidth - 60,
        y: layout.clientHeight - 200
      })
  }, [])

  //scale event
  const handleResizeStart = (e: OnResizeStart) => {
    e.setOrigin(['%', '%'])
    e.dragStart && e.dragStart.set(style.translate)
  }
  const handleResize = (e: OnResize) => {
    const beforeTranslate = e.drag.beforeTranslate
    if (e.width < 20 || e.width > 150) return
    e.target.style.width = `${e.width}px`
    e.target.style.height = `${e.height}px`
    e.target.style.transform =
      `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)` + `rotate(${style.rotate}deg)`
  }
  const handleResizeEnd = (e: OnResizeEnd) => {
    if (e.lastEvent) {
      style.translate = e.lastEvent.drag.beforeTranslate
      style.size = e.lastEvent.width
      handleUpdateStickers({ ...sticker, size: style.size })
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
      `rotate(${e.beforeRotation}deg)`
  }
  const handleRotateEnd = (e: OnRotateEnd) => {
    if (e.lastEvent) {
      console.log(e.target)
      style.rotate = e.lastEvent.beforeRotate
      handleUpdateStickers({ ...sticker, rotate: style.rotate })
    }
  }

  // drag event
  const handleDragStart = (e: OnDragStart) => {
    e.set(style.translate)
  }
  const handleDrag = (e: OnDrag) => {
    style.translate = e.beforeTranslate
    e.target.style.transform =
      `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)` +
      `rotate(${style.rotate}deg)`
  }
  const handleDragEnd = (e: OnDragEnd) => {
    if (e.lastEvent) {
      style.translate = e.lastEvent.beforeTranslate
      handleUpdateStickers({ ...sticker, x: style.translate[0], y: style.translate[1] })
    }
  }

  return (
    <div className={styles['container']}>
      <div
        className={classNames(styles.sticker, `sticker-${sticker.id}`)}
        style={getStickerStyle(sticker.type, sticker.id)}
      >
        <DeleteIcon
          className={styles['delete-icn']}
          onClick={() => handleDeleteSticker(sticker.id)}
        />
      </div>

      <Moveable
        target={target}
        rotatable={true}
        draggable={true}
        keepRatio={true}
        snappable={true}
        resizable={true}
        throttleResize={1}
        origin={true}
        edge={true}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        bounds={{ left: 0, top: 0, right: bounds.x, bottom: bounds.y }}
        throttleRotate={0}
        throttleDrag={0}
        onResizeStart={handleResizeStart}
        onRotateStart={handleRotateStart}
        onDragtart={handleDragStart}
        onResize={handleResize}
        onRotate={handleRotate}
        onDrag={handleDrag}
        onResizeEnd={handleResizeEnd}
        onRotateEnd={handleRotateEnd}
        onDragEnd={handleDragEnd}
        rotationPosition={'bottom-right'}
        dragArea={true}
      ></Moveable>
    </div>
  )
}

export default MoveableSticker
