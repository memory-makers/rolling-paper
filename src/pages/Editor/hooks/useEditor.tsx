import React, { ChangeEvent, useCallback, useState } from 'react'

import { PAPER_COLOR_LIST, TEXT_COLOR_LIST, FONT_LIST } from '../constants'

export type onChangeType = (value: ChangeEvent<HTMLInputElement>) => void

export const useEditor = () => {
  const [paperColor, setPaperColor] = useState(PAPER_COLOR_LIST[0])
  const [font, setFont] = useState(FONT_LIST[0])
  const [textColor, setTextColor] = useState(TEXT_COLOR_LIST[0])

  const handleChangePaperColor: onChangeType = useCallback((e) => {
    setPaperColor(e.target.value)
  }, [])
  const handleChangeFont: onChangeType = useCallback((e) => {
    setFont(e.target.value)
  }, [])
  const handleChangeTextColor: onChangeType = useCallback((e) => {
    setTextColor(e.target.value)
  }, [])

  return {
    paperColor,
    handleChangePaperColor,
    textColor,
    handleChangeTextColor,
    font,
    handleChangeFont,

    paperColorList: PAPER_COLOR_LIST,
    textColorList: TEXT_COLOR_LIST,
    fontList: FONT_LIST
  }
}
