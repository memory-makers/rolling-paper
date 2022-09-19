import { test_API } from '@/api'
import { fetchCards_API } from '@/api/rollingpaper'
import Header from '@/components/layout/Header'
import Buttons from '@/components/rollingpaper/Buttons'
import CardModal from '@/components/rollingpaper/CardModal'
import Content from '@/components/rollingpaper/Content'
import ModifyModeButtons from '@/components/rollingpaper/ModifyModeButtons'
import StickerContent from '@/components/rollingpaper/StickerContent'
import StickerModifyContent from '@/components/rollingpaper/StickerModifyContent'
import CardType from '@/utils/rollingPaper/Card.type'
import cardDummy from '@/utils/rollingPaper/cardDummy'
import StickerType from '@/utils/rollingPaper/Sticker.type'
import stickerDummy from '@/utils/rollingPaper/stickerDummy'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RollingPaper = () => {
  const rollingPaperId = useParams().rollingPaperId
  const [isCardDetailVisible, setIsCardDetailVisible] = useState(false)
  const [isModifyMode, setIsModifyMode] = useState(false)
  const [cardIndex, setCardIndex] = useState<number>(0)
  const [cards, setCards] = useState<CardType[]>(Object.values(cardDummy))
  const [stickers, setStickers] = useState<StickerType[]>(stickerDummy)
  const [newStickers, setNewStickers] = useState<StickerType[]>([...stickers])
  const rollingpaperName = '3학년 2반 친구들'

  useEffect(() => {
    console.log(rollingPaperId)
    if (rollingPaperId) {
      fetchCards_API(rollingPaperId, setCards)
    }
  }, [])

  const handleClickCard = useCallback(
    (id: number) => {
      if (!isModifyMode) {
        setIsCardDetailVisible(true)
        setCardIndex(id)
      }
    },
    [cards, isModifyMode]
  )
  const handlePrev = useCallback(() => {
    if (0 === cardIndex) {
      setCardIndex(cards.length - 1)
    } else {
      setCardIndex(cardIndex - 1)
    }
  }, [cardIndex, cards])

  const handleNext = useCallback(() => {
    if (cards.length - 1 === cardIndex) {
      setCardIndex(0)
    } else {
      setCardIndex(cardIndex + 1)
    }
  }, [cardIndex, cards])

  const handleModifyDone = useCallback(() => {
    console.log(newStickers)
    setStickers([...newStickers])
    setIsModifyMode(false)
  }, [newStickers])

  const handleModifyMode = useCallback(() => {
    if (!isModifyMode) setNewStickers([...stickers])
    setIsModifyMode(!isModifyMode)
  }, [isModifyMode])

  return (
    <>
      <Header text={rollingpaperName} type="title-button">
        {isModifyMode ? (
          <ModifyModeButtons
            handleModifyMode={handleModifyMode}
            handleModifyDone={handleModifyDone}
          />
        ) : (
          <Buttons handleModifyMode={handleModifyMode} />
        )}
      </Header>
      <Content cards={cards} handleClickCard={handleClickCard}>
        {isModifyMode ? (
          <StickerModifyContent newStickers={newStickers} setNewStickers={setNewStickers} />
        ) : (
          <StickerContent stickers={stickers} />
        )}
      </Content>

      <CardModal
        card={cards[cardIndex]}
        setIsCardDetailVisible={setIsCardDetailVisible}
        isCardDetailVisible={isCardDetailVisible}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </>
  )
}

export default RollingPaper
