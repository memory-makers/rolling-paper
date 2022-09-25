import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { getNicknameAPI } from '@/api/user'
import { useTheme } from '@/store/theme'
import { LOAD_NAME, useName } from '@/store/nickname'
import MakeNickname from '@/pages/Nickname/MakeNickname'
import EditNickname from '@/pages/Nickname/EditNickname'
import tokenStore from '@/api/tokenStore'

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

  const token = tokenStore.getAccessToken()
  const { nameState, nameDispatch } = useName()
  const [isInitModalOpen, setIsInitModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const handleClickEditModal = () => {
    if (!token) return
    setIsEditModalOpen((prev) => !prev)
  }

  const getNickname = async () => {
    // TODO: 추후 '익명'이 아닌, token 없는경우 url에서 nickname불러온 값으로 변경 필요.
    if (!token) return nameDispatch({ type: LOAD_NAME, payload: '익명' })

    const nickname = await getNicknameAPI()
    if (!nickname) setIsInitModalOpen((prev) => !prev)
    else nameDispatch({ type: LOAD_NAME, payload: nickname })
  }

  useEffect(() => {
    getNickname()
  }, [])

  return (
    <header className={classNames('header', state.theme, type)}>
      {titleVisible && (
        <div>
          <button type="button" onClick={handleClickEditModal}>
            <span className="header_name">{nameState}</span>
            <span>님의</span>
          </button>
          <br />
          <span>{text}</span>
        </div>
      )}
      {buttonVisible && children}
      {isInitModalOpen && <MakeNickname setIsModalOpen={setIsInitModalOpen} />}
      {isEditModalOpen && <EditNickname setIsModalOpen={setIsEditModalOpen} />}
    </header>
  )
}

export default Header
