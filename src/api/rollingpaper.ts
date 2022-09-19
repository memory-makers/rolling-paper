import CardType from '@/utils/rollingPaper/Card.type'
import StickerType from '@/utils/rollingPaper/Sticker.type'
import { axiosClient } from '.'

export const fetchCards_API = async (paperId: string, setCards: (data: CardType[]) => void) => {
  try {
    if (!paperId) return
    const res = await axiosClient.get(`cards/${paperId}`)
    const data = res.data as CardResponse
    const cards = data.result.card.map((card) => {
      return {
        content: card.cardText,
        background: card.cardColor,
        font: card.fontStyle,
        fontColor: card.fontColor,
        id: card.cardId,
        author: card.cardWriter
      } as CardType
    })
    setCards(cards)
  } catch (error) {
    console.log(error)
  }
}

interface CardResponse {
  code: number
  success: boolean
  isSuccess: true
  result: {
    card: Card[]
  }
  status: string
}

interface Card {
  cardColor: string
  cardId: number
  cardText: string
  fontColor: string
  fontStyle: string
  paperId: string
  cardWriter: string
}

export const fetchStickers_API = async (
  paperId: string,
  setStickers: (data: StickerType[]) => void
) => {
  try {
    if (!paperId) return
    const res = await axiosClient.get(`cards/${paperId}`)
    const data = res.data as StickerResponse
    const stickers = data.result.stickers.map((sticker) => {
      return {
        id: sticker.stickerId,
        size: sticker.stickerSize,
        type: sticker.type,
        rotate: sticker.rotate,
        x: sticker.x,
        y: sticker.y,
        scale: sticker.scale,
        paperId: sticker.paperId
      } as StickerType
    })
    setStickers(stickers)
  } catch (error) {
    console.log(error)
  }
}

interface StickerResponse {
  code: number
  success: boolean
  isSuccess: true
  message: string
  result: {
    status: string
    stickers: Sticker[]
  }
}

interface Sticker {
  paperId: number
  rotate: number
  scale: number
  stickerId: number
  stickerSize: number
  type: string
  x: number
  y: number
}
