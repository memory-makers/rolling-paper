import React from "react";
import KakaoButton from "@/components/buttons/KakaoButton";
import Card from "@/components/home/Card";
import colors from '@/styles/colors.module.scss'

import styles from './index.module.scss';

const cardOption = [
  {
    content: '사랑해',
    style: {
      transform: 'rotate(-10deg)',
      backgroundColor: colors.cardRed,
    }
  },
  {
    content: '고마워',
    style: {
      transform: 'rotate(10deg)',
      backgroundColor: colors.cardBlue,
    }
  },
  {
    content: '잘부탁해',
    style: {
      transform: 'rotate(-10deg)',
      backgroundColor: colors.cardGreen,
    }
  },
  {
    content: '수고했어',
    style: {
      transform: 'rotate(10deg)',
      backgroundColor: colors.cardPurple,
    }
  },
  {
    content: '오래보자',
    style: {
      transform: 'rotate(10deg)',
      backgroundColor: colors.cardYellow,
    }
  },
  {
    content: '그리울꺼야',
    style: {
      transform: 'rotate(-10deg)',
      backgroundColor: colors.cardBeige,
    }
  },
  {
    content: '소중해',
    style: {
      transform: 'rotate(-10deg)',
      backgroundColor: colors.cardGreen,
    }
  },
  {
    content: '축하해',
    style: {
      transform: 'rotate(2deg)',
      backgroundColor: colors.cardWhite,
    }
  },
  {
    content: '응원해',
    style: {
      transform: 'rotate(10deg)',
      backgroundColor: colors.cardBlue,
    }
  },
]

const Home = () => {
  return (
    <div className={styles.home}>
      <div>
        <img className="logo" src={`./imgs/logo.png`} />
      </div>
      <div className={styles['card-container']}>
        {cardOption.map(({ content, style }) => (
          <Card
            key={content}
            content={content}
            cardStyle={style}
          />
        ))}
      </div>
      <div className={styles['home-description']}>
        추억의 롤링페이퍼에서<br />
        추억을 만들고 간직하세요!
      </div>
      <KakaoButton />
    </div>
  );
};

export default Home;
