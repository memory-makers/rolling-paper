import CardType from '@/utils/rollingPaper/Card.type'
import React from 'react'
import colors from '@/styles/colors.scss'
import styles from './rollingpaper.module.scss'
import fonts from '@/styles/core/_typography.scss'
import classNames from 'classnames'
interface CardProps {
  card: CardType
  index: number
  handleClick: () => void
}

const Card = ({ index, card, handleClick }: CardProps) => {
  const rotate = index % 3 && index % 4 ? 'rotate(-10deg)' : 'rotate(10deg)'
  console.log(styles)
  return (
    <div
      className={classNames(styles.card, styles[card.background], styles[card.font])}
      style={{ transform: rotate }}
      onClick={handleClick}
    >
      <div>{card.content}</div>
    </div>
  )
}

export default Card
