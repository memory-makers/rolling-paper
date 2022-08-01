import React, { ReactNode } from 'react'
import { useTheme } from '../../store/theme'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { state, dispatch } = useTheme()
  return (
    <div
      // onClick={() => dispatch({ type: "toggle" })}
      className={`layout ${state.theme}`}
    >
      {children}
    </div>
  )
}

export default Layout