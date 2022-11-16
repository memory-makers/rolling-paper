import { LOAD_URL_NAME, useUrlName } from '@/store/urlNickname'
import { convertUrlToHostData } from '@/utils/rollingPaper/paper'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './rollingpaper.module.scss'

interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  const { rollingPaperId } = useParams()
  const { state: urlNameState, dispatch: urlNameDispatch } = useUrlName()

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
      <span className={styles['title']}>"{title}"</span>
    </div>
  )
}

export default Title
