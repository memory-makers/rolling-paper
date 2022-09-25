import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './rollingpaper.module.scss'

const EditorButton = () => {
  const navigate = useNavigate()
  return (
    <button className={styles['goto-login-btn']} onClick={() => navigate('/')}>
      나도 써볼까?
    </button>
  )
}

export default EditorButton
