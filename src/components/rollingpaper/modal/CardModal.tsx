import CardType from '@/utils/rollingPaper/Card.type'
import classNames from 'classnames'
import React from 'react'
import styles from './modal.module.scss'
import { ReactComponent as CloseIcon } from '@/assets/close-icn.svg'
import { ReactComponent as PrevIcon } from '@/assets/prev-icn.svg'
import { ReactComponent as NextIcon } from '@/assets/next-icn.svg'
import { useTheme } from '@/store/theme'
import CloseButton from '../button/CloseButton'
import DescCard from '../card/DescCard'

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
  const { state, dispatch } = useTheme()
  return (
    <div
      className={classNames(styles['card-modal'], styles[state.theme])}
      style={{ display: display }}
    >
      <CloseButton onClick={() => setIsCardDetailVisible(!isCardDetailVisible)} />
      <DescCard card={card} />
      <div className={styles['card-btns']}>
        <PrevIcon onClick={handlePrev} />
        <span className={styles['card-author']}>from.{card.author}</span>
        <NextIcon onClick={handleNext} />
      </div>
    </div>
  )
}

export default CardModal
