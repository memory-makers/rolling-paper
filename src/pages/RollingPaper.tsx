import Header from '@/components/layout/Header'
import Buttons from '@/components/rollingpaper/Buttons'
import Content from '@/components/rollingpaper/Content'
import cardDummy from '@/utils/rollingPaper/dummy'
import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'

const RollingPaper = () => {
  const rollingPaperId = useParams().rollingPaperId
  const [isCardDetailVisible, setIsCardDetailVisible] = useState(false)
  const [isModifyMode, setIsModifyMode] = useState(false)
  const [cardIndex, setCardIndex] = useState<number>(0)
  const [cards, setCards] = useState(cardDummy)
  const rollingpaperName = '3학년 2반 친구들'

  const handleClick = useCallback(
    (id: number) => {
      setIsCardDetailVisible(true)
      setCardIndex(id)
    },
    [cards]
  )
  const handlePrev = useCallback(() => {
    if (0 === cardIndex) {
      setCardIndex(Object.keys(cards).length - 1)
    } else {
      setCardIndex(cardIndex - 1)
    }
  }, [cards])

  const handleNext = useCallback(() => {
    if (Object.keys(cards).length - 1 === cardIndex) {
      setCardIndex(0)
    } else {
      setCardIndex(cardIndex + 1)
    }
  }, [cards])

  return (
    <>
      <Header text={rollingpaperName} type="title-button">
        <Buttons isModifyMode={isModifyMode} isCardDetailVisible={isCardDetailVisible} />
      </Header>
      <Content handleClick={handleClick} />
    </>
  )
}

export default RollingPaper
