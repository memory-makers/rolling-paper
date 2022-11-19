import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './sending.module.scss'

import ShareRoll from '../ShareRoll'
import { ModalButton } from '@/components/Modal/ModalItem'
import { useUrlName } from '@/store/urlNickname'
import { useGA } from '@/hooks'
import Ads from '../Ads'

import { ArrowLeftIcon, LogoArtIcon, LogoTextIcon } from '@/assets'

const Sending = () => {
  const navigate = useNavigate()
  const { gaEvent } = useGA()
  const { state: urlNameState } = useUrlName()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBackClick = () => {
    if (!urlNameState.paperUrl) navigate(-1)
    navigate(`/rollingpaper/${urlNameState.paperUrl}`)
  }

  const handleStickerClick = () => {
    navigate(`/rollingpaper/${urlNameState.paperUrl}?sticker-mode=true`)
  }

  const handleShareClick = () => {
    setIsModalOpen((prev) => !prev)
  }

  const handleHomeClick = () => {
    gaEvent({ action: 'click-sending-cv', data: { event: 'click' } })
    sessionStorage.removeItem('rolling_host')
    navigate('/')
  }

  const hostnameText = useMemo(() => {
    if (!urlNameState.hostName) return
    return '님에게 보낼'
  }, [urlNameState.hostName])

  const backArrowText = useMemo(() => {
    if (!urlNameState.paperUrl) return '이전으로'
    return '전체보기'
  }, [urlNameState.paperUrl])

  return (
    <div className={styles.container}>
      <header>
        <button type="button" className={styles.backArrowButton} onClick={handleBackClick}>
          <ArrowLeftIcon />
          <span>{backArrowText}</span>
        </button>
      </header>

      <div className={styles.contentsWrapper}>
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

          <div className={styles.adsContainer}>
            <Ads />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ShareRoll setIsModalOpen={setIsModalOpen}>
          다른 친구들도 카드를 <br /> 써보라고 공유해줄까요?
        </ShareRoll>
      )}
    </div>
  )
}

export default Sending
