import React from 'react'
import styles from './rollingpaper.module.scss'
interface OpenDateProps {
  untilOpen: string
  beforeOpen: boolean
}

const OpenDate = ({ untilOpen, beforeOpen }: OpenDateProps) => {
  return beforeOpen ? (
    <div className={styles['until-open']}>
      마감일까지 {untilOpen} 남았습니다. <br /> 마감일 이후에는 카드 작성 및 꾸미기가 불가능합니다.
    </div>
  ) : (
    <></>
  )
}

export default OpenDate
