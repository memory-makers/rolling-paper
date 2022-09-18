import CardType from '@/utils/rollingPaper/Card.type'
import cardDummy from '@/utils/rollingPaper/cardDummy'
import classNames from 'classnames'
import React from 'react'
import styles from './rollingpaper.module.scss'
import { ReactComponent as CloseIcon } from '@/assets/close-icn.svg'
import { ReactComponent as PrevIcon } from '@/assets/prev-icn.svg'
import { ReactComponent as NextIcon } from '@/assets/next-icn.svg'

interface CardModalProps {
  card: CardType
  isCardDetailVisible: boolean
  setIsCardDetailVisible: (visible: boolean) => void
  handlePrev: () => void
  handleNext: () => void
}

const CardModal = ({
  card,
  isCardDetailVisible,
  setIsCardDetailVisible,
  handlePrev,
  handleNext
}: CardModalProps) => {
  const display = isCardDetailVisible ? 'flex' : 'none'
  return (
    <div className={styles['card-modal']} style={{ display: display }}>
      <CloseIcon
        className={styles['close-btn']}
        onClick={() => setIsCardDetailVisible(!isCardDetailVisible)}
      />
      <div
        className={classNames(styles['card-content'], styles[card.background], styles[card.font])}
      >
        {card.content}
      </div>
      <div className={styles['card-btns']}>
        <PrevIcon onClick={handlePrev} className={styles['prev-btn']} />
        <span className={styles['card-author']}>from.{card.author}</span>
        <NextIcon onClick={handleNext} className={styles['next-btn']} />
      </div>
    </div>
  )
}

export default CardModal
