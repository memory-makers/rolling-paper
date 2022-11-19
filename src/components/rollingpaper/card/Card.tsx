import CardType from '@/utils/rollingPaper/Card.type'
import React from 'react'
import styles from './card.module.scss'
import classNames from 'classnames'
interface CardProps {
  card: CardType
  rotateDeg: string
  handleClick: () => void
}

const Card = ({ rotateDeg, card, handleClick }: CardProps) => {
  return (
    <div
      className={classNames(styles.card, styles[card.background], styles[card.font])}
      style={{ transform: rotateDeg }}
      onClick={handleClick}
    >
      <div className={classNames(styles.text, styles[card.fontColor])}>{card.content}</div>
    </div>
  )
}

export default Card
