import { createContext, Dispatch, ReactNode, useContext, useMemo, useReducer } from 'react'

export const LOAD_URL_NAME = 'LOAD_URL_NAME'

type NameType = typeof LOAD_URL_NAME

type Action = {
  type: NameType
  payload: { paperUrl: string; paperId: number; hostName: string }
}

type UrlNameDispatch = Dispatch<Action>

type State = { paperUrl: string; paperId: number; hostName: string }

const UrlNameStateContext = createContext<
  { urlNameState: State; urlNameDispatch: UrlNameDispatch } | undefined
>(undefined)

function urlNameReducer(state: State, action: Action) {
  switch (action.type) {
    case 'LOAD_URL_NAME': {
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

function UrlNameProvider({ children }: Props) {
  const [urlNameState, urlNameDispatch] = useReducer(urlNameReducer, {
    paperUrl: '',
    paperId: 0,
    hostName: ''
  })
  const value = useMemo(() => ({ urlNameState, urlNameDispatch }), [urlNameState])
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
