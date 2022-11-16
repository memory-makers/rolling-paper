import React, { useEffect, useState, useRef } from 'react'
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'
import CardType from '@/utils/rollingPaper/Card.type'
import Card from '../card/Card'
import Title from './Title'
interface ContentProps {
  handleClickCard: (index: number) => void
  cards: CardType[]
  isModifyMode: boolean
  children: JSX.Element[]
}

const Content = ({ isModifyMode, cards, handleClickCard, children }: ContentProps) => {
  const [scale, setScale] = useState<number | null>(null)
  const ref = useRef<ReactZoomPanPinchRef | null>(null)

  useEffect(() => {
    if (!scale) {
      const layout = document.querySelector('.layout') as HTMLDivElement
      const cardContent = document.querySelector('.card-content-component') as HTMLDivElement
      if (cardContent && ref.current && !isModifyMode) {
        const scaleHeight = layout.offsetHeight / cardContent.offsetHeight
        const scaleWidth = layout.offsetWidth / cardContent.offsetWidth
        const newScale = Math.min(scaleHeight, scaleWidth)
        ref.current.setTransform(
          layout.offsetWidth * 0.5 - cardContent.offsetWidth * newScale * 0.5,
          layout.offsetHeight * 0.5 - cardContent.offsetHeight * newScale * 0.5,
          newScale
        )
        setScale(newScale)
      }
    }
  }, [ref.current])

  const half = Math.ceil(Math.sqrt(cards.length))
  const modifyModeDisable = isModifyMode
    ? {
        panning: {
          disabled: true
        },
        pinch: {
          disabled: true
        },
        doubleClick: {
          disabled: true
        },
        zoomAnimation: {
          disabled: true
        }
      }
    : {}
  return (
    <div className="card-wrapper">
      <TransformWrapper
        ref={ref}
        initialScale={1}
        {...modifyModeDisable}
        centerOnInit={true}
        minScale={0}
        wheel={{ step: 0.05 }}
      >
        {({ setTransform, ...rest }) => (
          <TransformComponent
            wrapperClass="card-content-wrapper"
            contentClass="card-content-component"
          >
            <Title />
            <div
              className="card-content"
              style={{ gridTemplateColumns: `repeat(${half}, minmax(200px, 300px))` }}
            >
              {cards.map((card, index) => {
                const rotateDeg = index % 2 ? 'rotate(-10deg)' : 'rotate(10deg)'
                return (
                  <Card
                    key={index}
                    rotateDeg={rotateDeg}
                    card={card}
                    handleClick={() => handleClickCard(index)}
                  />
                )
              })}
            </div>
            {children?.map((child: React.ReactElement, index: number) => (
              <React.Fragment key={index}>
                {React.cloneElement(child, { setTransform: setTransform })}
              </React.Fragment>
            ))}
          </TransformComponent>
        )}
      </TransformWrapper>
    </div>
  )
}

export default Content
