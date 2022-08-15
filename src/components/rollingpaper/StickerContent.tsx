import CardType from '@/utils/rollingPaper/Card.type'
import cardDummy from '@/utils/rollingPaper/cardDummy'
import StickerType from '@/utils/rollingPaper/Sticker.type'
import React from 'react'
import Card from './Card'
import styles from './rollingpaper.module.scss'
import Sticker from './Sticker'
interface ContentProps {
  stickers: StickerType[]
}

const StickerContent = ({ stickers }: ContentProps) => {
  return (
    <div className={styles['sticker-content']}>
      {stickers.map((sticker) => (
        <Sticker isFloating={true} key={sticker.id} sticker={sticker} />
      ))}
    </div>
  )
}

export default StickerContent
