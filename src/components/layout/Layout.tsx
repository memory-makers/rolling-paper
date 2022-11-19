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
    console.log(window.innerHeight)
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
    console.log(document.documentElement.style)
  }
  window.addEventListener('resize', setVh)

  return <div className={'layout'}>{children}</div>
}

export default Layout
