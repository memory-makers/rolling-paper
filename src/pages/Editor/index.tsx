import React, { ChangeEvent, useCallback, useRef, useState } from 'react'
import cx from 'classnames'

import { useEditor, useOutsideClick } from './hooks'

import {
  BackGroundOption,
  CompleteButton,
  EditorSelectOption,
  editorSelectOptionList,
  EditorSelectType,
  FontOption,
  Paper,
  ShareButton,
  TextColorOption
} from './components'

import styles from './editor.module.scss'

const Editor = () => {
  const {
    paperColor,
    handleChangePaperColor,
    textColor,
    handleChangeTextColor,
    font,
    handleChangeFont,

    paperColorList,
    textColorList,
    fontList
  } = useEditor()

  // TODO: nickname
  // 초기값
  // 닉네임이 있을 경우 : 닉네임
  // 닉네임이 없을 경우 : 익명 (요청 시)
  const [nickName, setNickName] = useState('')
  const [paperContent, setPaperContent] = useState('')
  const [editorType, setEditorType] = useState(editorSelectOptionList[0])
  const [editorSelectOptionVisible, setEditorSelectOptionVisible] = useState(true)
  const editorSelectOptionRef = useRef(null)

  const handleChangeNickName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value)
  }, [])

  const handleChangePaperContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setPaperContent(e.target.value)
  }, [])

  const handleOpenEditorSelectOption = useCallback(() => {
    setEditorSelectOptionVisible(true)
  }, [])

  const handleCloseEditorSelectOption = useCallback(() => {
    setEditorSelectOptionVisible(false)
  }, [])
  useOutsideClick(editorSelectOptionRef, handleCloseEditorSelectOption)

  const handleChangeEditorType = useCallback((type: EditorSelectType) => {
    setEditorType(type)
  }, [])

  const handleClickShareButton = () => {
    // TODO: 공유
  }

  const handleClickCompleteButton = () => {
    // TODO: 완료
  }

  return (
    <div className={styles.editor}>
      <div className={styles['editor-header']}>
        <ShareButton />
        <CompleteButton />
      </div>
      <div className={styles['editor-body']}>
        <div className={styles['editor-nickname']}>
          <label>
            {`From. `}
            <input placeholder="" value={nickName} onChange={handleChangeNickName} />
          </label>
          <p>익명으로 보내고 싶으시면 비워주세요 😃</p>
        </div>
        <Paper
          value={paperContent}
          onChange={handleChangePaperContent}
          backgroundColor={paperColor}
          fontFamily={font}
          color={textColor}
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
                {paperColorList.map((p) => (
                  <BackGroundOption
                    key={p}
                    value={p}
                    onChange={handleChangePaperColor}
                    checked={p === paperColor}
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
                  {fontList.map((f) => (
                    <FontOption
                      key={f}
                      value={f}
                      onChange={handleChangeFont}
                      checked={f === font}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className={styles['editor-select-title']}>글자 색</div>
                <div className={styles['editor-select-option-list']}>
                  {textColorList.map((t) => (
                    <TextColorOption
                      key={t}
                      value={t}
                      onChange={handleChangeTextColor}
                      checked={t === textColor}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </EditorSelectOption>
      </div>
    </div>
  )
}

export default Editor
