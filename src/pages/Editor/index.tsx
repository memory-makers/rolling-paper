import { useCallback, useRef, useState } from 'react'
import cx from 'classnames'

import { updateCard_API } from '@/api/rollingpaper'
import { useEditor, useOutsideClick } from './hooks'
import { colorObject, fontObject } from './constants'
import {
  BackgroundOption,
  CompleteButton,
  EditorSelectOption,
  editorSelectOptionList,
  FontOption,
  Paper,
  ShareButton,
  TextColorOption
} from './components'
import CheckSendingCard from '../WriterRoll/CheckSendingCard'

import styles from './editor.module.scss'

const Editor = () => {
  const {
    paperId,
    cardWriter,
    handleChangeCardWriter,
    cardText,
    handleChangeCardText,
    editorType,
    handleChangeEditorType,
    cardColor,
    handleChangeCardColor,
    fontColor,
    handleChangeFontColor,
    fontStyle,
    handleChangeFontStyle,
    removeAllEditorValue,

    cardColorList,
    fontColorList,
    fontStyleList
  } = useEditor()

  const [editorSelectOptionVisible, setEditorSelectOptionVisible] = useState(true)
  const [isCheckSendingModalOpen, setIsCheckSendingModalOpen] = useState(false)
  const editorSelectOptionRef = useRef(null)

  const handleOpenEditorSelectOption = useCallback(() => {
    setEditorSelectOptionVisible(true)
  }, [])

  const handleCloseEditorSelectOption = useCallback(() => {
    setEditorSelectOptionVisible(false)
  }, [])
  useOutsideClick(editorSelectOptionRef, handleCloseEditorSelectOption)

  const handleClickCompleteButton = () => {
    setIsCheckSendingModalOpen(true)
  }

  const handleSendCard = async () => {
    const card = {
      cardColor,
      cardId: 0,
      cardText,
      cardWriter: cardWriter || '익명',
      fontColor,
      fontStyle,
      paperId
    }
    const res = await updateCard_API(card)
    if (!res) return false
    removeAllEditorValue()
    return true
  }

  return (
    <div className={styles.editor}>
      <div className={styles['editor-header']}>
        <CompleteButton onClick={handleClickCompleteButton} />
      </div>
      <div className={styles['editor-body']}>
        <div className={styles['editor-nickname']}>
          <label>
            {`From. `}
            <input placeholder="" value={cardWriter} onChange={handleChangeCardWriter} />
          </label>
          <p>익명으로 보내고 싶으시면 비워주세요 😃</p>
        </div>
        <Paper
          value={cardText}
          onChange={handleChangeCardText}
          backgroundColor={colorObject[cardColor]}
          fontFamily={fontObject[fontStyle]}
          color={colorObject[fontColor]}
        />
      </div>

      <div
        ref={editorSelectOptionRef}
        className={cx(styles['editor-select'], {
          [styles.visible]: editorSelectOptionVisible
        })}
        onClick={handleOpenEditorSelectOption}
      >
        <EditorSelectOption type={editorType} onChangeType={handleChangeEditorType}>
          {editorType === editorSelectOptionList[0] && (
            <div className={styles['editor-select-option-container']}>
              <div className={cx(styles['editor-select-option-list'], styles['paper-color'])}>
                {cardColorList.map((p) => (
                  <BackgroundOption
                    key={p}
                    value={p}
                    onChange={handleChangeCardColor}
                    checked={p === cardColor}
                  />
                ))}
              </div>
            </div>
          )}
          {editorType === editorSelectOptionList[1] && (
            <div className={styles['editor-select-option-container']}>
              <div>
                <div className={styles['editor-select-title']}>글꼴</div>
                <div className={styles['editor-select-option-list']}>
                  {fontStyleList.map((f) => (
                    <FontOption
                      key={f}
                      value={f}
                      onChange={handleChangeFontStyle}
                      checked={f === fontStyle}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className={styles['editor-select-title']}>글자 색</div>
                <div className={styles['editor-select-option-list']}>
                  {fontColorList.map((t) => (
                    <TextColorOption
                      key={t}
                      value={t}
                      onChange={handleChangeFontColor}
                      checked={t === fontColor}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </EditorSelectOption>
      </div>

      {isCheckSendingModalOpen && (
        <CheckSendingCard setIsModalOpen={setIsCheckSendingModalOpen} callback={handleSendCard} />
      )}
    </div>
  )
}

export default Editor
