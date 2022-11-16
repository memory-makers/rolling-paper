import React, { useCallback, useEffect, useState } from 'react'
import {
  fetchCards_API,
  fetchPaperId_API,
  fetchRollingPaper_API,
  fetchStickers_API,
  RollingPaperType,
  updateStickers_API
} from '@/api/rollingPaper'
import Header from '@/components/layout/Header'
import Buttons from '@/components/rollingpaper/container/Buttons'
import CardModal from '@/components/rollingpaper/modal/CardModal'
import Content from '@/components/rollingpaper/container/Content'
import EditorButton from '@/components/rollingpaper/button/EditorButton'
import ModifyModeButtons from '@/components/rollingpaper/container/ModifyModeButtons'
import OpenDate from '@/components/rollingpaper/container/OpenDate'
import StickerContent from '@/components/rollingpaper/container/StickerContent'
import StickerModifyContent from '@/components/rollingpaper/container/StickerModifyContent'
import { useTheme } from '@/store/theme'
import CardType from '@/utils/rollingPaper/Card.type'
import { dateDiffFormat } from '@/utils/rollingPaper/dateDiffFormat'
import StickerType from '@/utils/rollingPaper/Sticker.type'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import classNames from 'classnames'
import HomeButton from '@/components/rollingpaper/button/HomeButton'
import { LOAD_TITLE, useRollingPaper } from '@/store/rollingpaper'

const RollingPaper = () => {
  const urlId = useParams().rollingPaperId
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = !!searchParams.get('sticker-mode')
  const stickerMode = !!query
  const [rollingPaperId, setRollingPaperId] = useState(0)
  const [isCardDetailVisible, setIsCardDetailVisible] = useState(false)
  const [isModifyMode, setIsModifyMode] = useState(stickerMode)
  const [cardIndex, setCardIndex] = useState<number>(0)
  const [cards, setCards] = useState<CardType[]>([])
  const [stickers, setStickers] = useState<StickerType[]>([])
  const [newStickers, setNewStickers] = useState<StickerType[]>([])
  const [rollingPaper, setRollingPaper] = useState<RollingPaperType | null>(null)
  const [beforeOpen, setBeforeOpen] = useState(true)
  const [untilOpen, setUntilOpen] = useState('')
  const {
    state: { theme },
    dispatch: themeDispatch
  } = useTheme()
  const { dispatch: rollingPaperDispatch } = useRollingPaper()

  useEffect(() => {
    fetchPaperId_API(urlId, setRollingPaperId, navigate)
    fetchCards_API(rollingPaperId, setCards)
    fetchStickers_API(rollingPaperId, setStickers, setNewStickers)
    fetchRollingPaper_API(
      rollingPaperId,
      (rollingPaper) => {
        setRollingPaper(rollingPaper)
        rollingPaperDispatch({ type: LOAD_TITLE, payload: rollingPaper.paperTitle })
      },
      navigate
    )
  }, [rollingPaperId])

  useEffect(() => {
    if (rollingPaper?.dueDate) {
      const dateDiff = dateDiffFormat(rollingPaper.dueDate)
      setBeforeOpen(dateDiff.beforeOpen)
      setUntilOpen(dateDiff.untilOpen)
    }
    if (theme !== rollingPaper?.theme) themeDispatch({ type: 'toggle' })
  }, [rollingPaper])

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
  return rollingPaper ? (
    <div id="rollingpaper-container" className={classNames('rollingpaper-container', theme)}>
      <HomeButton />
      {isModifyMode ? (
        <ModifyModeButtons
          handleModifyMode={handleModifyMode}
          handleModifyDone={handleModifyDone}
        />
      ) : (
        <Buttons beforeOpen={beforeOpen} handleModifyMode={handleModifyMode} />
      )}
      <Content isModifyMode={isModifyMode} cards={cards} handleClickCard={handleClickCard}>
        <StickerModifyContent
          isModifyMode={isModifyMode}
          newStickers={newStickers}
          setNewStickers={setNewStickers}
        />
        <StickerContent isModifyMode={isModifyMode} stickers={stickers} />
      </Content>
      <OpenDate untilOpen={untilOpen} beforeOpen={beforeOpen} />
      {beforeOpen && <EditorButton />}
      {cards[cardIndex] && (
        <CardModal
          card={cards[cardIndex]}
          setIsCardDetailVisible={setIsCardDetailVisible}
          isCardDetailVisible={isCardDetailVisible}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
    </div>
  ) : (
    <></>
  )
}

export default RollingPaper
