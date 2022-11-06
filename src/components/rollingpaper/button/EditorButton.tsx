import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import button from './button.module.scss'

const EditorButton = () => {
  const urlId = useParams().rollingPaperId
  const navigate = useNavigate()
  return (
    <button
      className={button['editor-btn']}
      onClick={() => navigate(`/rollingpaper/${urlId}/editor`)}
    >
      나도 써볼까?
    </button>
  )
}

export default EditorButton
