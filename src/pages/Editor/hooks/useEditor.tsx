import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { debounce } from 'lodash'
import { useNavigate, useParams } from 'react-router-dom'



import { CARD_COLOR_LIST, FONT_COLOR_LIST, FONT_STYLE_LIST } from '../constants'
import { fetchPaperId_API } from '@/api/rollingPaper'

export type onChangeType = (value: ChangeEvent<HTMLInputElement>) => void

const getEditorValue = (key: string) => {
  const editorValue = localStorage.getItem(`EDITOR_${key}`)
  return editorValue
}
const saveEditorValue = (key: string, value: string) => {
  localStorage.setItem(`EDITOR_${key}`, value)
}
const removeAllEditorValue = () => {
  ;['urlId', 'cardWriter', 'cardText', 'editorType', 'cardColor', 'fontStyle', 'fontColor'].forEach(
    (key) => localStorage.removeItem(`EDITOR_${key}`)
  )
}

export const useEditor = () => {
  const urlId = useParams().rollingPaperId

  const navigate = useNavigate()
  const [paperId, setPaperId] = useState(0)
  const [cardWriter, setCardWriter] = useState('')
  const [cardText, setCardText] = useState('')

  const [cardColor, setCardColor] = useState(CARD_COLOR_LIST[0])
  const [fontStyle, setFontStyle] = useState(FONT_STYLE_LIST[0])
  const [fontColor, setFontColor] = useState(FONT_COLOR_LIST[0])

  const getAllSavedEditorValue = useCallback(() => {
    setCardWriter(getEditorValue('cardWriter') || '')
    setCardText(getEditorValue('cardText') || '')
    setCardColor(getEditorValue('cardColor') || CARD_COLOR_LIST[0])
    setFontStyle(getEditorValue('fontStyle') || FONT_STYLE_LIST[0])
    setFontColor(getEditorValue('fontColor') || FONT_COLOR_LIST[0])
  }, [])

  useEffect(() => {
    fetchPaperId_API(urlId, setPaperId, navigate)
  }, [urlId])

  useEffect(() => {
    if (!urlId) {
      removeAllEditorValue()
      return
    }

    const shouldNeedGetSavedEditorValue = getEditorValue('urlId') === urlId
    if (!shouldNeedGetSavedEditorValue) {
      removeAllEditorValue()
      saveEditorValue('urlId', urlId)
      return
    }

    getAllSavedEditorValue()
  }, [])

  const _debounceSaveCardWriter = useCallback(
    debounce((_cardWriter) => saveEditorValue('cardWriter', _cardWriter), 500),
    []
  )
  const _debounceSaveCardText = useCallback(
    debounce((_cardText) => saveEditorValue('cardText', _cardText), 500),
    []
  )

  useEffect(() => {
    _debounceSaveCardWriter(cardWriter)
  }, [cardWriter])

  useEffect(() => {
    _debounceSaveCardText(cardText)
  }, [cardText])

  const handleChangeCardWriter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCardWriter(e.target.value)
  }, [])

  const handleChangeCardText = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setCardText(e.target.value)
  }, [])

  const handleChangeCardColor: onChangeType = useCallback((e) => {
    setCardColor(e.target.value)
    saveEditorValue('cardColor', e.target.value)
  }, [])

  const handleChangeFontStyle = useCallback((_fontStyle: string) => {
    setFontStyle(_fontStyle)
    saveEditorValue('fontStyle', _fontStyle)
  }, [])

  const handleChangeFontColor: onChangeType = useCallback((e) => {
    setFontColor(e.target.value)
    saveEditorValue('fontColor', e.target.value)
  }, [])

  return {
    paperId,
    cardWriter,
    handleChangeCardWriter,
    cardText,
    handleChangeCardText,
    cardColor,
    handleChangeCardColor,
    fontColor,
    handleChangeFontColor,
    fontStyle,
    handleChangeFontStyle,
    removeAllEditorValue,

    cardColorList: CARD_COLOR_LIST,
    fontColorList: FONT_COLOR_LIST,
    fontStyleList: FONT_STYLE_LIST
  }
}
