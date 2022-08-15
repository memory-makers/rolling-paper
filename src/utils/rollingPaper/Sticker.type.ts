interface StickerType {
  id: string
  size?: number
  type: string
  rotate?: number
  x?: number
  y?: number
  scale?: number
  paperId: string
}
export default StickerType

export enum StickerShape {
  heart = 'heart',
  confetti = 'confetti',
  cupcake = 'cupcake',
  garlands = 'garlands',
  moon = 'moon',
  present = 'present',
  clova = 'clova',
  bear = 'bear',
  sun = 'sun'
}
