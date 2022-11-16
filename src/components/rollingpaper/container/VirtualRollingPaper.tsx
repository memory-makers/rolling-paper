import React from 'react'
import StickerType from '@/utils/rollingPaper/Sticker.type'
import CardType from '@/utils/rollingPaper/Card.type'
import Title from './Title'
import Card from '../card/Card'
import StickerContent from './StickerContent'
import classNames from 'classnames'
import { Spinner } from '@/assets'
interface VirtualRollingPaperProps {
  cards: CardType[]
  stickers: StickerType[]
  title: string
  theme: string
}

const VirtualRollingPaper = ({ title, cards, stickers, theme }: VirtualRollingPaperProps) => {
  const half = Math.ceil(Math.sqrt(cards.length))
  return (
    <>
      <div id="vr-loading">
        <Spinner />
        <div className="loading-text">이미지 다운로드 중</div>
      </div>
      <div className={classNames('virtual-rollingpaper', theme)}>
        <Title title={title} />
        <div
          className="card-content"
          style={{ gridTemplateColumns: `repeat(${half}, minmax(200px, 300px))` }}
        >
          {cards.map((card, index) => {
            const rotateDeg = index % 2 ? 'rotate(-10deg)' : 'rotate(10deg)'
            return <Card key={index} rotateDeg={rotateDeg} card={card} handleClick={() => {}} />
          })}
        </div>
        <StickerContent stickers={stickers} />
      </div>
    </>
  )
}

export default VirtualRollingPaper
