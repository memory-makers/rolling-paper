import { useNavigate } from 'react-router-dom'
import styles from './sending.module.scss'

import { ModalButton } from '@/components/Modal/ModalItem'

import { ReactComponent as BackArrowIcon } from '@/assets/back-arrow.svg'
import { ReactComponent as LogoArtIcon } from '@/assets/logo-art.svg'
import { ReactComponent as LogoTextIcon } from '@/assets/logo-text.svg'

interface Props {
  nickname?: string
}

const Sending = ({ nickname }: Props) => {
  const navigate = useNavigate()

  const shareData = {
    title: `${nickname}님의 롤링페이퍼`,
    text: `${nickname}님에게 롤링페이퍼를 써보아요!`,
    url: 'user.paperUrl'
  }

  const handleBackClick = () => {
    navigate(`/rollingpaper/1`)
  }

  const handleStickerClick = () => {
    // 스티커
  }

  const handleShareClick = () => {
    navigator.clipboard.writeText('user.paperUrl')
    navigator.share(shareData)
  }

  const handleHomeClick = () => {
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <header>
        <button type="button" className={styles.backArrowButton} onClick={handleBackClick}>
          <BackArrowIcon />
        </button>
      </header>

      <div className={styles.contents}>
        <LogoArtIcon />
        <LogoTextIcon className={styles.logoTextSvg} />

        <p className={styles.sendingText}>
          <span className={styles.nameColor}>{nickname}</span> 님에게 보낼
          <br /> 카드내용 저장 완료!
        </p>

        <div className={styles.buttonContainer}>
          <ModalButton type="button" onClick={handleStickerClick}>
            스티커로 꾸며볼까? ★
          </ModalButton>
          <ModalButton type="button" onClick={handleShareClick}>
            친구들한테 공유해볼까?
          </ModalButton>
          <ModalButton type="button" onClick={handleHomeClick}>
            나도 만들어볼까?
          </ModalButton>
        </div>
      </div>
    </div>
  )
}

export default Sending
