import React, { ReactNode, useState } from 'react'
import styles from './shareRollItem.module.scss'
import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem'

import { CLIENT_PAPER_URL } from '@/config/commonLink'
import { ClipboardIcon, DownloadIcon, ShareIcon2 } from '@/assets'
import Popup from '@/components/Modal/Popup'
import { toPng } from 'html-to-image'
import _ from 'lodash'
import { useUrlName } from '@/store/urlNickname'
import VirtualRollingPaper from '../VirtualRollingPaper/VirtualRollingPaper'
import gsap from 'gsap'
import { duration } from 'moment'

interface Props {
  children: ReactNode
}

function filter(node: HTMLElement) {
  return node.tagName !== 'i'
}
const ShareRollItem = ({ children }: Props) => {
  const [isPopupActive, setIsPopupActive] = useState(false)
  const [popupContent, setPopupContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { state: urlNameState } = useUrlName()

  const fullPaperUrl = urlNameState.paperUrl
    ? `${CLIENT_PAPER_URL}${urlNameState.paperUrl}`
    : '유효하지 않은 URL입니다.'
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

  const handleCreateImage = (loading: HTMLDivElement, rollingPaper: HTMLDivElement) => {
    gsap
      .timeline()
      .to(loading, {
        opacity: 1,
        duration: 1
      })
      .to(rollingPaper, {
        opacity: 1,
        onComplete: () => {
          const scale = 2
          toPng(rollingPaper, {
            width: rollingPaper.offsetWidth * scale,
            height: rollingPaper.offsetHeight * scale,
            style: {
              transform: `scale(${scale}) translate(${rollingPaper.offsetWidth / 2 / scale}px, ${
                rollingPaper.offsetHeight / 2 / scale
              }px)`
            }
          })
            .then((image) => {
              const link = window.document.createElement('a')
              link.setAttribute('style', 'display:none; width: 100%;')
              link.setAttribute('crossorigin', 'anonymous')
              link.download = `rollingpaper_${urlNameState.paperUrl}` + '.png'
              link.href = image
              link.click()
            })
            .catch(function (error) {
              gsap
                .timeline()
                .to(rollingPaper, { opacity: 0 })
                .to(loading, {
                  opacity: 0,
                  duration: 1,
                  delay: 1,
                  onComplete: () => {
                    setIsLoading(false)
                    setPopupContent('(IE, Safari X)\n다른 브라우저로 시도해주세요.')
                    setIsPopupActive(true)
                    if (popupDelay) clearTimeout(popupDelay)
                    popupDelay = setTimeout(() => {
                      setIsPopupActive(false)
                    }, 1000)
                  }
                })
            })
            .then(() => {
              gsap
                .timeline()
                .to(rollingPaper, { opacity: 0 })
                .to(loading, {
                  opacity: 0,
                  duration: 1,
                  delay: 1,
                  onComplete: () => {
                    setIsLoading(false)
                    setPopupContent('이미지 다운로드 완료!')
                    setIsPopupActive(true)
                    if (popupDelay) clearTimeout(popupDelay)
                    popupDelay = setTimeout(() => {
                      setIsPopupActive(false)
                    }, 1000)
                  }
                })
            })
        }
      })
  }

  const handleImageDownloadClick = () => {
    setIsLoading(true)
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
          disabled={!urlNameState.paperUrl}
        >
          <ClipboardIcon />
        </button>
      </div>
      <div className={styles.buttons}>
        {urlNameState.paperUrl && (
          <ModalButton type="button" onClick={handleShareClick}>
            <span>공유하기</span>
            <ShareIcon2 />
          </ModalButton>
        )}
        {/* {
          <ModalButton type="button" onClick={handleImageDownloadClick}>
            <span>이미지로 저장하기</span>
            <DownloadIcon />
          </ModalButton>
        } */}
      </div>
      <Popup isActive={isPopupActive} content={popupContent} />
      {isLoading && <VirtualRollingPaper onCreateImage={handleCreateImage} />}
    </>
  )
}

export default ShareRollItem
