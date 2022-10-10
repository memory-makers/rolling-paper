import { ReactNode, useState } from 'react'
import styles from './shareRollItem.module.scss'

import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem'
import PopupCopy from '@/components/Modal/PopupCopy'

import { CLIENT_PAPER_URL } from '@/config/commonLink'
import { ClipboardIcon, ShareIcon2 } from '@/assets'

interface Props {
  paperUrl: string | undefined
  children: ReactNode
}

const ShareRollItem = ({ paperUrl, children }: Props) => {
  const [isPopupActive, setIsPopupActive] = useState(false)
  const fullPaperUrl = paperUrl ? `${CLIENT_PAPER_URL}${paperUrl}` : '유효하지 않은 URL입니다.'
  let popupDelay: NodeJS.Timer

  const shareData = {
    title: '추억의 롤링페이퍼',
    text: '친구, 동료들과 함께 추억을 만들고 간직하세요!',
    url: fullPaperUrl
  }

  const handleClipboardCopyClick = () => {
    navigator.clipboard.writeText(fullPaperUrl)

    setIsPopupActive(true)
    if (popupDelay) clearTimeout(popupDelay)
    popupDelay = setTimeout(() => {
      setIsPopupActive(false)
    }, 1000)
  }

  const handleShareClick = () => {
    navigator.clipboard.writeText(fullPaperUrl)
    navigator.share(shareData)
  }

  return (
    <>
      <ModalText type="title">{children}</ModalText>

      <ModalText type="label">롤링페이퍼 링크</ModalText>
      <div className={styles.shareInputWrapper}>
        <ModalInput type="text" name="title" value={fullPaperUrl} readOnly isAddIcon />
        <button
          type="button"
          className={styles.shareIconButton}
          onClick={handleClipboardCopyClick}
          disabled={!paperUrl}
        >
          <ClipboardIcon />
        </button>
      </div>
      {!!paperUrl && (
        <ModalButton type="button" onClick={handleShareClick}>
          <span>공유하기</span>
          <ShareIcon2 />
        </ModalButton>
      )}

      <PopupCopy isActive={isPopupActive} />
    </>
  )
}

export default ShareRollItem
