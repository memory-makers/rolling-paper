import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { getNicknameAPI } from '@/api/user'
import { useTheme } from '@/store/theme'
import { LOAD_NAME, useName } from '@/store/nickname'
import MakeNickname from '@/pages/Nickname/MakeNickname'
import EditNickname from '@/pages/Nickname/EditNickname'
import tokenStore from '@/api/tokenStore'
import { SettingIcon } from '@/assets'

type HeaderType = 'only-button' | 'title-button' | 'only-title'

interface HeaderProps {
  children?: React.ReactNode
  text?: string
  type: HeaderType
}

const Header = ({ children, text, type }: HeaderProps) => {
  const { state, dispatch } = useTheme()
  const navigate = useNavigate()
  const titleVisible = type === 'only-title' || type === 'title-button'
  const buttonVisible = type === 'only-button' || type === 'title-button'

  const token = tokenStore.getAccessToken()

  const { state: nameState, dispatch: nameDispatch } = useName()
  const [isInitModalOpen, setIsInitModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const handleClickEditModal = () => {
    if (!token) return
    setIsEditModalOpen((prev) => !prev)
  }

  const handleClickLogout = () => {
    navigate('/setting')
  }

  const getNickname = async () => {
    const nickname = await getNicknameAPI()
    if (!nickname) return setIsInitModalOpen(true)
    nameDispatch({ type: LOAD_NAME, payload: nickname })
  }

  const name = useMemo(() => {
    return nameState
  }, [nameState])

  useEffect(() => {
    getNickname()
  }, [])

  return (
    <header className={classNames('header', state.theme, type)}>
      {titleVisible && (
        <div>
          <button type="button" onClick={handleClickEditModal}>
            <span className="header_name">{name}</span>
            {name && <span>님의</span>}
          </button>
          <br />
          <span>{text}</span>
        </div>
      )}
      <button type="button" className="logout_button" onClick={handleClickLogout}>
        <SettingIcon />
      </button>
      {buttonVisible && children}

      {isInitModalOpen && <MakeNickname setIsModalOpen={setIsInitModalOpen} />}
      {isEditModalOpen && <EditNickname setIsModalOpen={setIsEditModalOpen} />}
    </header>
  )
}

export default Header
