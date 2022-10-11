import { createContext, Dispatch, ReactNode, useContext, useMemo, useReducer } from 'react'

export const LOAD_URL_NAME = 'LOAD_URL_NAME'

type NameType = typeof LOAD_URL_NAME

type Action = {
  type: NameType
  payload: { paperUrl: string; paperId: number; hostName: string }
}

type dispatch = Dispatch<Action>
type State = { paperUrl: string; paperId: number; hostName: string }

const UrlNameStateContext = createContext<{ state: State; dispatch: dispatch } | undefined>(
  undefined
)

function urlNameReducer(state: State, action: Action) {
  switch (action.type) {
    case 'LOAD_URL_NAME': {
      sessionStorage.setItem('rolling_host', JSON.stringify(action.payload))
      return action.payload
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

interface Props {
  children: ReactNode
}

const INITIAL_STATE: State = JSON.parse(sessionStorage.getItem('rolling_host')!) || {
  paperUrl: '',
  paperId: 0,
  hostName: ''
}

function UrlNameProvider({ children }: Props) {
  const [state, dispatch] = useReducer(urlNameReducer, INITIAL_STATE)
  const value = useMemo(() => ({ state, dispatch }), [state])
  return <UrlNameStateContext.Provider value={value}>{children}</UrlNameStateContext.Provider>
}

function useUrlName() {
  const context = useContext(UrlNameStateContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a NameProvider')
  }
  return context
}

export { UrlNameProvider, useUrlName }
