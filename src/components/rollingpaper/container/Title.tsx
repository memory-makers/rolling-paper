import { useRollingPaper } from '@/store/rollingpaper'
import { LOAD_URL_NAME, useUrlName } from '@/store/urlNickname'
import { convertUrlToHostData } from '@/utils/rollingPaper/paper'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './rollingpaper.module.scss'

const Title = () => {
  const { rollingPaperId } = useParams()
  const { state: urlNameState, dispatch: urlNameDispatch } = useUrlName()
  const { state: rolliingPaper } = useRollingPaper()

  const getPaperIdNickname = async () => {
    if (!rollingPaperId) return
    const hostData = await convertUrlToHostData(rollingPaperId)
    if (!hostData) return
    return urlNameDispatch({
      type: LOAD_URL_NAME,
      payload: hostData
    })
  }
  useEffect(() => {
    getPaperIdNickname()
  }, [])
  return (
    <div className={styles['paper-title']}>
      <span>
        <span className={styles['name']}>{urlNameState.hostName}</span>의
      </span>
      <span className={styles['title']}>"{rolliingPaper.title}"</span>
    </div>
  )
}

export default Title
