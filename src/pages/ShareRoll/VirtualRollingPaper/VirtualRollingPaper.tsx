import React, { useEffect, useRef } from 'react'
import StickerType from '@/utils/rollingPaper/Sticker.type'
import CardType from '@/utils/rollingPaper/Card.type'
import Title from '../../../components/rollingpaper/container/Title'
import Card from '../../../components/rollingpaper/card/Card'
import StickerContent from '../../../components/rollingpaper/container/StickerContent'
import classNames from 'classnames'
import { Spinner } from '@/assets'
import { useTheme } from '@/store/theme'
import { LOAD_CARDS, LOAD_STICKERS, LOAD_TITLE, useRollingPaper } from '@/store/rollingpaper'
import { fetchCards_API, fetchRollingPaper_API, fetchStickers_API } from '@/api/rollingpaper'
import { useUrlName } from '@/store/urlNickname'
import HomeLogo from '@/components/home/HomeLogo'

interface VirtualRollingPaperProps {
  onCreateImage: (loading: HTMLDivElement, rollingPaper: HTMLDivElement) => void
}

const VirtualRollingPaper = ({ onCreateImage }: VirtualRollingPaperProps) => {
  const {
    state: { paperId }
  } = useUrlName()
  const { state: rollingPaper, dispatch: rollingPaperDispatch } = useRollingPaper()
  const {
    state: { theme },
    dispatch: themeDispatch
  } = useTheme()
  const rollingPaperRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    async function fecthRollingPaper() {
      if (paperId && rollingPaperRef.current) {
        await fetchCards_API(paperId, (cards) =>
          rollingPaperDispatch({ type: LOAD_CARDS, payload: cards })
        )
        await fetchStickers_API(paperId, (stickers) =>
          rollingPaperDispatch({ type: LOAD_STICKERS, payload: stickers })
        )
        if (rollingPaper.title === '') {
          await fetchRollingPaper_API(paperId, (data) => {
            rollingPaperDispatch({ type: LOAD_TITLE, payload: data.paperTitle })
            if (data.theme !== theme) themeDispatch({ type: 'toggle' })
          })
        }
        if (loadingRef.current && rollingPaperRef.current) {
          await onCreateImage(loadingRef.current, rollingPaperRef.current)
        }
      }
    }
    fecthRollingPaper()
  }, [paperId])

  const half = Math.ceil(Math.sqrt(rollingPaper.cards.length))
  return (
    <>
      <div ref={loadingRef} id="vr-loading" className={theme}>
        <HomeLogo />
        <div className="loading-text">이미지 다운로드 중</div>
        <Spinner />
      </div>
      <div ref={rollingPaperRef} className={theme} id="virtual-rollingPaper">
        <Title />
        <div
          className="card-content"
          style={{ gridTemplateColumns: `repeat(${half}, minmax(200px, 300px))` }}
        >
          {rollingPaper.cards.map((card, index) => {
            const rotateDeg = index % 2 ? 'rotate(-10deg)' : 'rotate(10deg)'
            return <Card key={index} rotateDeg={rotateDeg} card={card} handleClick={() => {}} />
          })}
        </div>
        <StickerContent stickers={rollingPaper.stickers} />
      </div>
    </>
  )
}

export default VirtualRollingPaper
