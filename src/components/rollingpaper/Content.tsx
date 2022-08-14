import cardDummy from '@/utils/rollingPaper/cardDummy'
import React from 'react'
import Card from './Card'
import styles from './rollingpaper.module.scss'
interface ContentProps {
  handleClickCard: (index: number) => void
}

const Content = ({ handleClickCard }: ContentProps) => {
  return (
    <div className={styles.content}>
      {Object.keys(cardDummy).map((key, index) => {
        const card = cardDummy[key]
        const rotateDeg = index % 3 && index % 4 ? 'rotate(-10deg)' : 'rotate(10deg)'
        return (
          <Card
            rotateDeg={rotateDeg}
            key={key}
            card={card}
            handleClick={() => handleClickCard(index)}
          />
        )
      })}
    </div>
  )
}

export default Content
