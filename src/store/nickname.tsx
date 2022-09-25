import { createContext, Dispatch, ReactNode, useContext, useMemo, useReducer } from 'react'

export const LOAD_NAME = 'LOAD_NAME'
export const EDIT_NAME = 'EDIT_NAME'

type NameType = typeof LOAD_NAME | typeof EDIT_NAME

type Action = {
  type: NameType
  payload: string
}

type NameDispatch = Dispatch<Action>

type State = string

const NameStateContext = createContext<
  { nameState: State; nameDispatch: NameDispatch } | undefined
>(undefined)

function nameReducer(state: State, action: Action) {
  switch (action.type) {
    case 'LOAD_NAME': {
      return action.payload
    }

    case 'EDIT_NAME': {
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

function NameProvider({ children }: Props) {
  const [nameState, nameDispatch] = useReducer(nameReducer, '')
  const value = { nameState, nameDispatch }
  return <NameStateContext.Provider value={value}>{children}</NameStateContext.Provider>
}

function useName() {
  const context = useContext(NameStateContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a NameProvider')
  }
  return context
}

export { NameProvider, useName }
