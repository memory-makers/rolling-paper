import colors from '@/styles/colors.module.scss'
import fonts from '@/styles/core/_typography.module.scss'

export const colorObject = colors
export const fontObject = fonts

export const CARD_COLOR_LIST = Object.freeze([
  'cardRed',
  'cardBlue',
  'cardGreen',
  'cardPurple',
  'cardYellow',
  'cardWhite'
])

export const FONT_COLOR_LIST = Object.freeze([
  'textBlack',
  'textRed',
  'textBlue',
  'textGreen',
  'textPurple',
  'textYellow'
])

export const FONT_STYLE_LIST = Object.freeze(['basic', 'type1', 'type2', 'type3', 'type4', 'type5'])

export const FONT_OPTION_TEXT = '이 글꼴은 어때요?'
export const TEXT_COLOR_OPTION_TEXT = '이 색은 어때요?'
