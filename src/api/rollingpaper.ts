import CardType from '@/utils/rollingPaper/Card.type'
import StickerType from '@/utils/rollingPaper/Sticker.type'
import { axiosClient } from '.'

export const fetchCards_API = async (
  paperId: string | undefined,
  setCards: (data: CardType[]) => void
) => {
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
  paperId: string | undefined,
  setStickers: (data: StickerType[]) => void
) => {
  try {
    if (!paperId) return
    const params = { paperId: paperId }
    const res = await axiosClient.get(`stickers`, { params })
    const data = res.data as StickersResponse
    const stickers = data.result.sticker.map((sticker) => {
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
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

interface StickersResponse {
  code: number
  success: boolean
  isSuccess: boolean
  message: string
  result: {
    status: string
    sticker: Sticker[]
  }
}
interface StickerResponse {
  code: number
  success: boolean
  isSuccess: boolean
  message: string
  result: {
    status: string
    stickers: Sticker
  }
}

interface StickerRequest {
  paperId: number
  rotate: number
  scale: number
  stickerSize: number
  type: string
  x: number
  y: number
}

interface Sticker {
  paperId: number
  rotate: number
  scale: number
  stickerId: number | null
  stickerSize: number
  type: string
  x: number
  y: number
  requestType: string
}

export const updateStickers_API = async (
  rollingpaperId: string | undefined,
  newStickers: StickerType[],
  stickers: StickerType[],
  setStickers: (data: StickerType[]) => void
) => {
  try {
    if (!rollingpaperId) return
    const paperId = Number(rollingpaperId)
    const ids = stickers.reduce((acc, cur) => ((acc[cur.id] = true), acc), {})
    const newIds = newStickers.reduce((acc, cur) => ((acc[cur.id] = true), acc), {})
    const reqStickers: Sticker[] = []
    newStickers.forEach((newSticker) => {
      if (!ids[newSticker.id]) {
        reqStickers.push({
          paperId: paperId,
          stickerId: null,
          rotate: newSticker.rotate || 1,
          scale: newSticker.scale || 1,
          stickerSize: newSticker.size || 60,
          type: newSticker.type,
          x: newSticker.x || 0,
          y: newSticker.y || 0,
          requestType: 'create'
        })
      } else {
        reqStickers.push({
          paperId: paperId,
          stickerId: newSticker.id,
          rotate: newSticker.rotate || 1,
          scale: newSticker.scale || 1,
          stickerSize: newSticker.size || 60,
          type: newSticker.type,
          x: newSticker.x || 0,
          y: newSticker.y || 0,
          requestType: 'update'
        })
      }
    })
    stickers.forEach((sticker) => {
      if (!newIds[sticker.id]) {
        reqStickers.push({
          paperId: paperId,
          stickerId: sticker.id,
          rotate: sticker.rotate || 1,
          scale: sticker.scale || 1,
          stickerSize: sticker.size || 60,
          type: sticker.type,
          x: sticker.x || 0,
          y: sticker.y || 0,
          requestType: 'delete'
        })
      }
    })
    const res = await axiosClient.post(`stickers`, reqStickers)
    const resData = res.data as StickersResponse
    const resStickers = resData.result.sticker.map((sticker) => {
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
    setStickers(resStickers)
  } catch (error) {
    console.log(error)
  }
}
