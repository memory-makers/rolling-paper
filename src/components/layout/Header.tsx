import { useTheme } from '@/store/theme'
import classNames from 'classnames'
import React from 'react'

type HeaderType = 'only-button' | 'title-button' | 'only-title'

interface HeaderProps {
  children?: React.ReactNode
  text: string
  type: HeaderType
}
// 공통으로 사용하는 헤더입니다.
const Header = ({ children, text, type }: HeaderProps) => {
  const name = '레몬'
  const { state, dispatch } = useTheme()
  const titleVisible = type === 'only-title' || type === 'title-button'
  const buttonVisible = type === 'only-button' || type === 'title-button'
  return (
    <header className={classNames('header', state.theme, type)}>
      {titleVisible && (
        <div>
          <span className="header_name">{name}</span>
          <span>님의</span>
          <br />
          <span>{text}</span>
        </div>
      )}
      {buttonVisible && children}
    </header>
  )
}

export default Header
