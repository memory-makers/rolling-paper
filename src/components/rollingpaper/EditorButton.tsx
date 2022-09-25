import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './rollingpaper.module.scss'

const EditorButton = () => {
  const navigate = useNavigate()
  return (
    <button className={styles['editor-btn']} onClick={() => navigate('/editor')}>
      나도 써볼까?
    </button>
  )
}

export default EditorButton
