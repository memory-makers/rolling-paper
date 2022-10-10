import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './sending.module.scss'

import { ModalButton } from '@/components/Modal/ModalItem'
import { useUrlName } from '@/store/urlNickname'

import { CLIENT_PAPER_URL } from '@/config/commonLink'
import { ArrowLeftIcon, LogoArtIcon, LogoTextIcon } from '@/assets'

const Sending = () => {
  const navigate = useNavigate()
  const { state: urlNameState } = useUrlName()

  const shareData = {
    title: `${urlNameState.hostName}님의 롤링페이퍼`,
    text: `${urlNameState.hostName}님에게 롤링페이퍼를 써보아요!`,
    url: `${CLIENT_PAPER_URL}${urlNameState.paperUrl}`
  }

  const handleBackClick = () => {
    if (!urlNameState.paperUrl) navigate(-1)
    navigate(`/rollingpaper/${urlNameState.paperUrl}`)
  }

  const handleStickerClick = () => {
    navigate(`/rollingpaper/${urlNameState.paperUrl}?sticker-mode=true`)
  }

  const handleShareClick = () => {
    navigator.clipboard.writeText(`${CLIENT_PAPER_URL}${urlNameState.paperUrl}`)
    navigator.share(shareData)
  }

  const handleHomeClick = () => {
    sessionStorage.removeItem('rolling_host')
    navigate('/')
  }

  const hostnameText = useMemo(() => {
    if (!urlNameState.hostName) return
    return '님에게 보낼'
  }, [])

  return (
    <div className={styles.container}>
      <header>
        <button type="button" className={styles.backArrowButton} onClick={handleBackClick}>
          <ArrowLeftIcon />
          <span>이전화면</span>
        </button>
      </header>

      <div className={styles.contents}>
        <LogoArtIcon />
        <LogoTextIcon className={styles.logoTextSvg} />

        <p className={styles.sendingText}>
          <span className={styles.nameColor}>{urlNameState.hostName}</span>
          {hostnameText}
          <br /> 카드내용 저장 완료!
        </p>

        <div className={styles.buttonContainer}>
          {urlNameState.hostName && (
            <>
              <ModalButton type="button" onClick={handleStickerClick} color="secondary">
                스티커로 꾸며볼까? ★
              </ModalButton>
              <ModalButton type="button" onClick={handleShareClick} color="secondary">
                친구들한테 공유해볼까?
              </ModalButton>
            </>
          )}
          <ModalButton type="button" onClick={handleHomeClick}>
            나도 만들어볼래!
          </ModalButton>
        </div>
      </div>
    </div>
  )
}

export default Sending
