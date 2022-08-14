import Card from './Card.type'

const cardDummy = {
  ['0']: {
    content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
    background: 'CARD_BLUE',
    font: 'default'
  },
  ['1']: {
    content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
    background: 'CARD_RED',
    font: 'default'
  },
  ['2']: {
    content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
    background: 'CARD_PURPLE',
    font: 'default'
  }
} as { [id: string]: Card }

export default cardDummy
