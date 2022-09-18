import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { getNicknameAPI } from '@/api/user'
import { useTheme } from '@/store/theme'
import MakeNickname from '@/pages/Nickname/MakeNickname'
import EditNickname from '@/pages/Nickname/EditNickname'

type HeaderType = 'only-button' | 'title-button' | 'only-title'

interface HeaderProps {
  children?: React.ReactNode
  text: string
  type: HeaderType
}
// 공통으로 사용하는 헤더입니다.
const Header = ({ children, text, type }: HeaderProps) => {
  const { state, dispatch } = useTheme()
  const titleVisible = type === 'only-title' || type === 'title-button'
  const buttonVisible = type === 'only-button' || type === 'title-button'

  const [name, setName] = useState('')
  const [isInitModalOpen, setIsInitModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const handleClickEditModal = () => {
    setIsEditModalOpen((prev) => !prev)
  }

  const getNickname = async () => {
    const nickname = await getNicknameAPI()
    if (!nickname) setIsInitModalOpen((prev) => !prev)
    else setName(nickname)
  }

  useEffect(() => {
    getNickname()
  }, [])

  return (
    <header className={classNames('header', state.theme, type)}>
      {titleVisible && (
        <div>
          <button type="button" onClick={handleClickEditModal}>
            <span className="header_name">{name}</span>
          </button>
          <span>님의</span>
          <br />
          <span>{text}</span>
        </div>
      )}
      {buttonVisible && children}
      {isInitModalOpen && <MakeNickname setIsModalOpen={setIsInitModalOpen} setName={setName} />}
      {isEditModalOpen && (
        <EditNickname setIsModalOpen={setIsEditModalOpen} name={name} setName={setName} />
      )}
    </header>
  )
}

export default Header
