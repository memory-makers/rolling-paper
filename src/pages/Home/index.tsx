import React from 'react'
import KakaoButton from '@/components/buttons/KakaoButton'
import Card from '@/components/home/Card'
import colors from '@/styles/colors.module.scss'

import styles from './index.module.scss'
import useAnimate from '@/utils/home/useAnimate'
import HomeLogo from '@/components/home/HomeLogo'
import classNames from 'classnames'
import { cards } from '@/utils/home/cards'
import { stickers } from '@/utils/home/stickers'
import Sticker from '@/components/home/Sticker'

const Home = () => {
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
