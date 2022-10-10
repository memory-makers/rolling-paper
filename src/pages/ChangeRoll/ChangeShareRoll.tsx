import { useState } from 'react'
import styles from '@/styles/pages/_shareRoll.module.scss'

import Modal from '@/components/Modal'
import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem'
import PopupCopy from '@/components/Modal/PopupCopy'

import { ReactComponent as ClipboardIcon } from '@/assets/Text-files.svg'
import { ReactComponent as ShareIcon } from '@/assets/share.svg'

interface Props {
  setIsModalOpen: (state: boolean) => void
  paperUrl: string
}

const ChangeShareRoll = ({ setIsModalOpen, paperUrl }: Props) => {
  const [isPopupActive, setIsPopupActive] = useState(false)
  let popupDelay: NodeJS.Timer

  const shareData = {
    title: `홍길동님의 롤링페이퍼`,
    text: `홍길동님에게 롤링페이퍼를 써보아요!`,
    url: paperUrl
  }

  const handleClipboardCopyClick = () => {
    navigator.clipboard.writeText(paperUrl)

    setIsPopupActive(true)
    if (popupDelay) clearTimeout(popupDelay)
    popupDelay = setTimeout(() => {
      setIsPopupActive(false)
    }, 1000)
  }

  const handleShareClick = () => {
    navigator.clipboard.writeText(paperUrl)
    navigator.share(shareData)
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ModalText type="title">
        롤링페이퍼를 친구들에게 <br /> 작성해달라고 공유해볼까요?
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

      <PopupCopy isActive={isPopupActive} />
    </Modal>
  )
}

export default ChangeShareRoll
