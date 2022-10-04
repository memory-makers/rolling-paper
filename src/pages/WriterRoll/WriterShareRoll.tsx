import styles from '@/styles/pages/_shareRoll.module.scss'

import Modal from '@/components/Modal'
import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem'

import { ReactComponent as ClipboardIcon } from '@/assets/Text-files.svg'
import { ReactComponent as ShareIcon } from '@/assets/share.svg'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

declare global {
  interface Window {
    kakao: any
  }
}

const WriterShareRoll = ({ setIsModalOpen }: Props) => {
  const paperUrl = window.location.href
  const shareData = {
    title: `홍길동님의 롤링페이퍼`,
    text: `홍길동님에게 롤링페이퍼를 써보아요!`,
    url: paperUrl
  }

  const handleClipboardCopyClick = () => {
    navigator.clipboard.writeText(paperUrl)
  }

  const handleShareClick = () => {
    navigator.clipboard.writeText(paperUrl)
    navigator.share(shareData)
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ModalText type="title">
        다른 친구들도 롤링페이퍼를
        <br /> 써보라고 공유해줄까요?
      </ModalText>

      <ModalText type="label">롤링페이퍼 링크</ModalText>
      <div className={styles.shareInputWrapper}>
        <ModalInput type="text" name="title" value={paperUrl} readOnly isAddIcon />
        <button type="button" className={styles.shareIconButton} onClick={handleClipboardCopyClick}>
          <ClipboardIcon />
        </button>
      </div>

      <ModalButton type="button" onClick={handleShareClick}>
        <span>공유하기</span>
        <ShareIcon />
      </ModalButton>
    </Modal>
  )
}

export default WriterShareRoll
