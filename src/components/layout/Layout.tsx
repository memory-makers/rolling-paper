import React, { ReactNode } from 'react'
import { useTheme } from '../../store/theme'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { state, dispatch } = useTheme()
  const isDark =
    window.location.href.includes('rollingpaper') && state.theme === 'dark' ? 'dark' : 'light'
  return <div className={`layout ${isDark}`}>{children}</div>
}

export default Layout
