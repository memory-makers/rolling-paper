import CardType from '@/utils/rollingPaper/Card.type'
import StickerType from '@/utils/rollingPaper/Sticker.type'
import React, { useContext, useMemo, useReducer } from 'react'

export const LOAD_CARDS = 'LOAD_CARDS'
export const LOAD_STICKERS = 'LOAD_STICKERS'
export const LOAD_TITLE = 'LOAD_TITLE'

type LoadCardsType = typeof LOAD_CARDS
type LoadStickersType = typeof LOAD_STICKERS
type LoadTitleType = typeof LOAD_TITLE

type Action =
  | { type: LoadCardsType; payload: CardType[] }
  | { type: LoadStickersType; payload: StickerType[] }
  | { type: LoadTitleType; payload: string }
type Dispatch = (action: Action) => void
type State = { cards: CardType[]; stickers: StickerType[]; title: string }
type RollingPaperProviderProps = { children: React.ReactNode }

const RollingPaperContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
)

function rollingpaperReducer(state: State, action: Action) {
  switch (action.type) {
    case 'LOAD_CARDS': {
      return { ...state, cards: action.payload }
    }
    case 'LOAD_STICKERS': {
      return { ...state, stickers: action.payload }
    }
    case 'LOAD_TITLE': {
      return { ...state, title: action.payload }
    }
    default: {
      throw new Error(`Unhandled action type: ${JSON.stringify(action)}`)
    }
  }
}

function RollingPaperProvider({ children }: RollingPaperProviderProps) {
  const [state, dispatch] = useReducer(rollingpaperReducer, {
    cards: [],
    stickers: [],
    title: ''
  })
  const value = useMemo(() => ({ state, dispatch }), [state])

  return <RollingPaperContext.Provider value={value}>{children}</RollingPaperContext.Provider>
}

function useRollingPaper() {
  const context = useContext(RollingPaperContext)
  if (context == undefined) {
    throw new Error('useRollingPaper must be used within a RollingPaperProvider')
  }
  return context
}

export { RollingPaperProvider, useRollingPaper }
