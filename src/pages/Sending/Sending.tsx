import { useNavigate } from 'react-router-dom'
import styles from './sending.module.scss'

import { ModalButton } from '@/components/Modal/ModalItem'

import { ReactComponent as BackArrowIcon } from '@/assets/back-arrow.svg'
import { ReactComponent as LogoArtIcon } from '@/assets/logo-art.svg'
import { ReactComponent as LogoTextIcon } from '@/assets/logo-text.svg'

interface Props {
  isSuccess?: boolean
  nickname?: string
}

const Sending = ({ isSuccess, nickname }: Props) => {
  const navigate = useNavigate()
  const statusText = isSuccess ? '카드 내용 저장 완료!' : '전송 실패ㅠㅠ'

  const shareData = {
    title: `홍길동님의 롤링페이퍼`,
    text: `홍길동님에게 롤링페이퍼를 써보아요!`,
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

  const handleReWriteClick = () => {
    navigate('/editor')
  }

  const handleCancelClick = () => {
    navigate('/editor')
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
          <span className={styles.nameColor}>{nickname}</span> 님에게 {isSuccess && '보낼'}
          <br /> {statusText}
        </p>

        <div className={styles.buttonContainer}>
          {isSuccess && (
            <>
              <ModalButton type="button" onClick={handleStickerClick}>
                스티커로 꾸며볼까?
              </ModalButton>
              <ModalButton type="button" onClick={handleShareClick}>
                친구들한테 공유해볼까?
              </ModalButton>
              <ModalButton type="button" onClick={handleHomeClick}>
                나도 만들어볼까?
              </ModalButton>
            </>
          )}

          {!isSuccess && (
            <>
              <ModalButton type="button" onClick={handleReWriteClick}>
                다시 적기
              </ModalButton>
              <ModalButton type="button" onClick={handleCancelClick}>
                전송 취소하기
              </ModalButton>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sending
