import React from 'react';
import styles from './home.module.scss'

interface CardProps {
  content: string
  cardStyle?: React.CSSProperties
}

const Card = ({ content, cardStyle }: CardProps) => {
  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles['card-content']}>
        {content}
      </div>
    </div>
  );
};

export default Card;
