import cardDummy from '@/utils/rollingPaper/cardDummy'
import React from 'react'
import Card from './Card'
import styles from './rollingpaper.module.scss'
interface ContentProps {
  handleClick: (index: number) => void
}

const Content = ({ handleClick }: ContentProps) => {
  return (
    <div className={styles.content}>
      {Object.keys(cardDummy).map((key, index) => {
        const card = cardDummy[key]
        return <Card index={index} key={key} card={card} handleClick={() => handleClick(index)} />
      })}
    </div>
  )
}

export default Content
