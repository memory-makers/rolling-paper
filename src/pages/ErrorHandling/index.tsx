import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './errorHandling.module.scss'

import { ReactComponent as LogoArtIcon } from '@/assets/logo-art.svg'

interface Props {
  children: ReactNode
}

const ErrorHandling = ({ children }: Props) => {
  const navigate = useNavigate()

  const handleClickGoBack = () => {
    navigate(-1)
  }

  const handleClickGoHome = () => {
    navigate('/')
  }

  return (
    <section className={styles.container}>
      {children}
      <div className={styles.flyIcon}>
        <LogoArtIcon />
      </div>
      <button type="button" className={styles.goBackButton} onClick={handleClickGoBack}>
        이전 화면으로 돌아가기
      </button>
      <button type="button" className={styles.goHomeButton} onClick={handleClickGoHome}>
        초기 화면으로 돌아가기
      </button>
    </section>
  )
}

export default ErrorHandling
