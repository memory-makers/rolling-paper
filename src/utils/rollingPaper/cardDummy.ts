import Card from './Card.type'

const cardDummy = {
  ['0']: {
    content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
    background: 'cardBlue',
    font: 'basic'
  },
  ['1']: {
    content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
    background: 'cardRed',
    font: 'type1'
  },
  ['2']: {
    content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
    background: 'cardPurple',
    font: 'type2'
  }
} as { [id: string]: Card }

export default cardDummy
