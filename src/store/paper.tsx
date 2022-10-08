import { createContext, Dispatch, ReactNode, useContext, useMemo, useReducer } from 'react'

export const LOAD_PAPER = 'LOAD_PAPER'
export const ADD_PAPER = 'ADD_PAPER'
export const EDIT_PAPER = 'EDIT_PAPER'
export const DELETE_PAPER = 'DELETE_PAPER'

type LoadPaperType = typeof LOAD_PAPER
type AddPaperType = typeof ADD_PAPER
type EditPaperType = typeof EDIT_PAPER
type DeletePaperType = typeof DELETE_PAPER

type Action =
  | {
      type: LoadPaperType
      payload: {
        paperId: number
        paperTitle: string
        dueDate: string
        theme: string
        paperUrl: string
      }[]
    }
  | {
      type: AddPaperType
      payload: {
        paperId: number
        paperTitle: string
        dueDate: string
        theme: string
        paperUrl: string
      }
    }
  | {
      type: EditPaperType
      payload: {
        paperId: number
        paperTitle: string
        dueDate: string
        theme: string
        paperUrl: string
      }
    }
  | { type: DeletePaperType; payload: { paperId: number } }

type PaperDispatch = Dispatch<Action>

type State = {
  paperId: number
  paperTitle: string
  dueDate: string
  theme: string
  paperUrl: string
}

const PaperStateContext = createContext<{ state: State[]; dispatch: PaperDispatch } | undefined>(
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
      const papers = state.map((item) => {
        if (item.paperId === action.payload.paperId) {
          return { ...item, ...action.payload }
        }
        return item
      })
      return papers
    }

    case 'DELETE_PAPER': {
      return state.filter((item) => item.paperId !== action.payload.paperId)
    }

    default: {
      throw new Error(`Unhandled action type: ${JSON.stringify(action)}`)
    }
  }
}

interface Props {
  children: ReactNode
}

function PaperProvider({ children }: Props) {
  const [state, dispatch] = useReducer(paperReducer, [])
  const value = useMemo(() => ({ state, dispatch }), [state])
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
