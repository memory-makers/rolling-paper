import React, { ReactNode } from 'react'
import { useTheme } from '../../store/theme'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <div className={'layout'}>{children}</div>
}

export default Layout
