import { createContext, ReactNode, useContext, useReducer } from 'react'

/**
 *
 * 1. 페이퍼 생성하기
 * 2. 페이퍼 수정하기
 * 3. 페이서 삭제하기
 */

export const LOAD_PAPER = 'LOAD_PAPER'
export const ADD_PAPER = 'ADD_PAPER'
export const EDIT_PAPER = 'EDIT_PAPER'
export const DELETE_PAPER = 'DELETE_PAPER'

type PaperType = typeof LOAD_PAPER | typeof ADD_PAPER | typeof EDIT_PAPER | typeof DELETE_PAPER
/**
 * action 객체  = {type: '', payload: ''}
 */
type Action = { type: PaperType; payload?: any }
type Dispatch = (action: Action) => void
type State = {
  paperId: number
  paperTitle: string
  dueDate: string
  theme: string
  paperUrl: string
}

type PaperProviderProps = { children: ReactNode }

const PaperStateContext = createContext<{ state: State[]; dispatch: Dispatch } | undefined>(
  undefined
)

function paperReducer(state: State[], action: Action) {
  switch (action.type) {
    case 'LOAD_PAPER': {
      return action.payload
    }

    case 'ADD_PAPER': {
      return [...state, action.payload]
    }

    case 'EDIT_PAPER': {
      console.log('action.payload = ', action.payload)
      const papers = state.map((item) => {
        if (item.paperId === action.payload.paperId) {
          return { ...item, ...action.payload }
        }
        return item
      })
      console.log('papers = ', papers)
      return papers
    }

    case 'DELETE_PAPER': {
      return state.filter((item) => item.paperId !== action.payload.paperId)
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function PaperProvider({ children }: PaperProviderProps) {
  const [state, dispatch] = useReducer(paperReducer, [])
  const value = { state, dispatch }
  return <PaperStateContext.Provider value={value}>{children}</PaperStateContext.Provider>
}

function usePaper() {
  const context = useContext(PaperStateContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a PaperProvider')
  }
  return context
}

// NOTE: HOW TO USE
// const {state, dispatch} = usePaper()
// const paper = {paperId : 1, paperTitle: ''}
// dispatch({type: 'ADD_PAPER', payload: paper })
// <p>{state.map((item)=> item.paperId)}</p>

export { PaperProvider, usePaper }
