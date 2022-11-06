import CardType from '@/utils/rollingPaper/Card.type'
import cardDummy from '@/utils/rollingPaper/cardDummy'
import StickerType from '@/utils/rollingPaper/Sticker.type'
import classNames from 'classnames'
import React from 'react'
import Card from '../card/Card'
import styles from './rollingpaper.module.scss'
import Sticker from '../sticker/Sticker'
interface ContentProps {
  isModifyMode: boolean
  stickers: StickerType[]
}

const StickerContent = ({ isModifyMode, stickers }: ContentProps) => {
  const modifyMode = isModifyMode ? 'modify-mode' : ''
  return (
    <div className={classNames(styles['sticker-content'], styles[modifyMode])}>
      {stickers.map((sticker) => (
        <Sticker isFloating={true} key={sticker.id} sticker={sticker} />
      ))}
    </div>
  )
}

export default StickerContent
