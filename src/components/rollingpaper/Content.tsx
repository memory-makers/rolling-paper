import CardType from '@/utils/rollingPaper/Card.type'
import cardDummy from '@/utils/rollingPaper/cardDummy'
import React from 'react'
import Card from './Card'
import styles from './rollingpaper.module.scss'
interface ContentProps {
  handleClickCard: (index: number) => void
  cards: CardType[]
}

const Content = ({ cards, handleClickCard }: ContentProps) => {
  return (
    <div className={styles.content}>
      {cards.map((card, index) => {
        const rotateDeg = index % 3 && index % 4 ? 'rotate(-10deg)' : 'rotate(10deg)'
        return (
          <Card
            key={index}
            rotateDeg={rotateDeg}
            card={card}
            handleClick={() => handleClickCard(index)}
          />
        )
      })}
    </div>
  )
}

export default Content
