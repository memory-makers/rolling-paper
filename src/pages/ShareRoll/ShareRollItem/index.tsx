import { ReactNode, useState } from 'react'
import styles from './shareRollItem.module.scss'
import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem'

import { CLIENT_PAPER_URL } from '@/config/commonLink'
import { ClipboardIcon, DownloadIcon, ShareIcon2 } from '@/assets'
import { checkBrowser } from '@/utils/common/checkBrowser'
import Popup from '@/components/Modal/Popup'
import { toPng, toSvg } from 'html-to-image'
import _, { size } from 'lodash'
import { useTheme } from '@/store/theme'
import colors from '@/styles/colors.scss'

interface Props {
  paperUrl: string | undefined
  children: ReactNode
  size?: { width: number; height: number }
}

function filter(node: HTMLElement) {
  return node.tagName !== 'i'
}
const ShareRollItem = ({ paperUrl, children, size }: Props) => {
  const [isPopupActive, setIsPopupActive] = useState(false)
  const [popupContent, setPopupContent] = useState('')
  const { state, dispatch } = useTheme()
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
    setPopupContent('링크 복사 완료!')
    if (popupDelay) clearTimeout(popupDelay)
    popupDelay = setTimeout(() => {
      setIsPopupActive(false)
    }, 1000)
  }

  const handleShareClick = () => {
    navigator.clipboard.writeText(fullPaperUrl)
    navigator.share(shareData)
  }

  const handleImageDownloadClick = () => {
    const rollingpaper = document.getElementsByClassName(
      'card-content-wrapper'
    )[0] as HTMLDivElement
    if (checkBrowser()) {
      setPopupContent('(IE, Safari X)\n다른 브라우저로 시도해주세요.')
      setIsPopupActive(true)
      if (popupDelay) clearTimeout(popupDelay)
      popupDelay = setTimeout(() => {
        setIsPopupActive(false)
      }, 1000)
    } else {
      if (rollingpaper && size) {
        toSvg(rollingpaper, {
          height: size.height,
          width: size.width,
          backgroundColor: state.theme === 'dark' ? '#352e20' : '#fff8eb'
        }).then((image) => {
          const link = window.document.createElement('a')
          link.setAttribute('style', 'display:none; width: 100%;')
          link.setAttribute('crossorigin', 'anonymous')
          link.download = `rollingpaper_${paperUrl}` + '.svg'
          link.href = image
          link.click()
        })
      }
    }
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
      <div className={styles.buttons}>
        {!!paperUrl && (
          <ModalButton type="button" onClick={handleShareClick}>
            <span>공유하기</span>
            <ShareIcon2 />
          </ModalButton>
        )}
        {
          <ModalButton type="button" onClick={handleImageDownloadClick}>
            <span>이미지로 저장하기</span>
            <DownloadIcon />
          </ModalButton>
        }
      </div>
      <Popup isActive={isPopupActive} content={popupContent} />
    </>
  )
}

export default ShareRollItem
