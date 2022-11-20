import { useEffect } from 'react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

import tokenStore from '@/api/tokenStore'

import KakaoButton from '@/components/buttons/KakaoButton'
import Card from '@/components/home/Card'
import HomeLogo from '@/components/home/HomeLogo'
import Sticker from '@/components/home/Sticker'

import useAnimate from '@/utils/home/useAnimate'
import { cards } from '@/utils/home/cards'
import { stickers } from '@/utils/home/stickers'

import styles from './index.module.scss'

const Home = () => {
  const navigate = useNavigate()
  const [cardRef, logoRef] = useAnimate()

  return (
    <div className={styles.home}>
      <HomeLogo ref={logoRef} />
      <div ref={cardRef} className={styles['home-content']}>
        <div className={styles['card-container']}>
          {stickers.map((sticker) => (
            <Sticker key={sticker.id} sticker={sticker} />
          ))}
          {cards.map(({ content, style }) => (
            <Card key={content} content={content} cardStyle={style} />
          ))}
        </div>
        <div className={classNames(styles['home-description'], 'title')}>
          추억의 롤링페이퍼에서
          <br />
          추억을 만들고 간직하세요!
        </div>
      </div>
      <KakaoButton />
    </div>
  )
}

export default Home
