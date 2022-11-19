import React, { ReactNode, useEffect } from 'react'
import { useTheme } from '../../store/theme'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  
  useEffect(() => {
    setVh()
  }, [])

  const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', setVh)

  return <div className={'layout'}>{children}</div>
}

export default Layout
