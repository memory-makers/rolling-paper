import {
  fetchCards_API,
  fetchPaperId_API,
  fetchStickers_API,
  updateStickers_API
} from '@/api/rollingpaper'
import Header from '@/components/layout/Header'
import Buttons from '@/components/rollingpaper/Buttons'
import CardModal from '@/components/rollingpaper/CardModal'
import Content from '@/components/rollingpaper/Content'
import EditorButton from '@/components/rollingpaper/EditorButton'
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
  const urlId = useParams().rollingPaperId
  const [rollingPaperId, setRollingPaperId] = useState(0)
  const [isCardDetailVisible, setIsCardDetailVisible] = useState(false)
  const [isModifyMode, setIsModifyMode] = useState(false)
  const [cardIndex, setCardIndex] = useState<number>(0)
  const [cards, setCards] = useState<CardType[]>([])
  const [stickers, setStickers] = useState<StickerType[]>([])
  const [newStickers, setNewStickers] = useState<StickerType[]>([])
  const rollingpaperName = '3학년 2반 친구들'

  useEffect(() => {
    fetchPaperId_API(urlId, setRollingPaperId)
    fetchCards_API(rollingPaperId, setCards)
    fetchStickers_API(rollingPaperId, setStickers, setNewStickers)
  }, [rollingPaperId])

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

  const handleModifyDone = () => {
    updateStickers_API(rollingPaperId, newStickers, stickers, setStickers)
    setIsModifyMode(false)
  }

  const handleModifyMode = () => {
    if (!isModifyMode) setNewStickers([...stickers])
    setIsModifyMode(!isModifyMode)
  }
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
        <StickerModifyContent
          isModifyMode={isModifyMode}
          newStickers={newStickers}
          setNewStickers={setNewStickers}
        />
        <StickerContent isModifyMode={isModifyMode} stickers={stickers} />
      </Content>
      <EditorButton />
      {cards[cardIndex] && (
        <CardModal
          card={cards[cardIndex]}
          setIsCardDetailVisible={setIsCardDetailVisible}
          isCardDetailVisible={isCardDetailVisible}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
    </>
  )
}

export default RollingPaper
