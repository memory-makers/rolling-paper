import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { debounce } from 'lodash'

import { editorSelectOptionList } from '../components'

import { PAPER_COLOR_LIST, TEXT_COLOR_LIST, FONT_LIST } from '../constants'
import { useParams } from 'react-router-dom'

export type onChangeType = (value: ChangeEvent<HTMLInputElement>) => void

const getEditorValue = (key: string) => {
  const editorValue = localStorage.getItem(`EDITOR_${key}`)
  return editorValue
}
const saveEditorValue = (key: string, value: string) => {
  localStorage.setItem(`EDITOR_${key}`, value)
}
const removeAllEditorValue = () => {
  ;['urlId', 'nickName', 'paperContent', 'editorType', 'paperColor', 'font', 'textColor'].forEach(
    (key) => localStorage.removeItem(`EDITOR_${key}`)
  )
}

export const useEditor = () => {
  const urlId = useParams().rollingPaperId
  const [nickName, setNickName] = useState('')
  const [paperContent, setPaperContent] = useState('')

  const [editorType, setEditorType] = useState(editorSelectOptionList[0])
  const [paperColor, setPaperColor] = useState(PAPER_COLOR_LIST[0])
  const [font, setFont] = useState(FONT_LIST[0])
  const [textColor, setTextColor] = useState(TEXT_COLOR_LIST[0])

  const getAllSavedEditorValue = useCallback(() => {
    setNickName(getEditorValue('nickName') || '')
    setPaperContent(getEditorValue('paperContent') || '')
    setEditorType(getEditorValue('editorType') || editorSelectOptionList[0])
    setPaperColor(getEditorValue('paperColor') || PAPER_COLOR_LIST[0])
    setFont(getEditorValue('font') || FONT_LIST[0])
    setTextColor(getEditorValue('textColor') || TEXT_COLOR_LIST[0])
  }, [])

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

  const _debounceSaveNickName = useCallback(
    debounce((_nickName) => saveEditorValue('nickName', _nickName), 500),
    []
  )
  const _debounceSavePaperContent = useCallback(
    debounce((_paperContent) => saveEditorValue('paperContent', _paperContent), 500),
    []
  )

  useEffect(() => {
    _debounceSaveNickName(nickName)
  }, [nickName])

  useEffect(() => {
    _debounceSavePaperContent(paperContent)
  }, [paperContent])

  const handleChangeNickName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value)
  }, [])

  const handleChangePaperContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setPaperContent(e.target.value)
  }, [])

  const handleChangeEditorType = useCallback((type: string) => {
    setEditorType(type)
    saveEditorValue('editorType', type)
  }, [])

  const handleChangePaperColor: onChangeType = useCallback((e) => {
    setPaperColor(e.target.value)
    saveEditorValue('paperColor', e.target.value)
  }, [])

  const handleChangeFont: onChangeType = useCallback((e) => {
    setFont(e.target.value)
    saveEditorValue('font', e.target.value)
  }, [])

  const handleChangeTextColor: onChangeType = useCallback((e) => {
    setTextColor(e.target.value)
    saveEditorValue('textColor', e.target.value)
  }, [])

  return {
    nickName,
    handleChangeNickName,
    paperContent,
    handleChangePaperContent,
    editorType,
    handleChangeEditorType,
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
