import React from 'react'
import classNames from 'classnames'
import cardSt from './card.module.scss'
import CardType from '@/utils/rollingPaper/Card.type'

interface DescCardProps {
  card: CardType
}

const DescCard = ({ card }: DescCardProps) => {
  return (
    <div className={classNames(cardSt['card-content'], cardSt[card.background], cardSt[card.font])}>
      <div className={classNames(cardSt['text'], cardSt[card.fontColor])}>{card.content}</div>
    </div>
  )
}

export default DescCard
