import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './rollingpaper.module.scss'

const GotoLoginButton = () => {
  const navigate = useNavigate()
  return (
    <button className={styles['goto-login-btn']} onClick={() => navigate('/')}>
      나도 한번 만들어볼까?
    </button>
  )
}

export default GotoLoginButton
