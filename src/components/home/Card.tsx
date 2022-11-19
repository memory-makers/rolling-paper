import classNames from 'classnames'
import React from 'react'
import styles from './home.module.scss'

interface CardProps {
  content: string
  cardStyle?: React.CSSProperties
}

const Card = ({ content, cardStyle }: CardProps) => {
  return (
    <div className={classNames(styles.card, 'card')} style={cardStyle}>
      {content}
    </div>
  )
}

export default Card
