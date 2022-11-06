import colors from '@/styles/colors.module.scss'
import fonts from '@/styles/core/_typography.module.scss'

export const colorObject = colors
export const fontObject = fonts

export const CARD_COLOR_LIST: readonly string[] = Object.freeze([
  'cardRed',
  'cardBlue',
  'cardGreen',
  'cardPurple',
  'cardYellow',
  'cardWhite'
])

export const FONT_COLOR_LIST: readonly string[] = Object.freeze([
  'textBlack',
  'textRed',
  'textBlue',
  'textGreen',
  'textPurple',
  'textYellow'
])

export const FONT_STYLE_LIST: readonly string[] = Object.freeze([
  'basic',
  'type1',
  'type2',
  'type3',
  'type4',
  'type5'
])
export const FONT_STYLE_OPTION_TITLE = Object.freeze({
  basic: '이서윤체',
  type1: '다이어리체',
  type2: '평창평화체',
  type3: '박용준투사회보체',
  type4: '제주명조체',
  type5: '나눔고딕체'
})
