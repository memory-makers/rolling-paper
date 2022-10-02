import { ReactNode } from 'react'
import cx from 'classnames'
import styles from './selectEditorOption.module.scss'

interface EditorSelectOptionProps {
  type: string
  onChangeType: (value: string) => void
  children: ReactNode
}

export const editorSelectOptionList = ['배경', '텍스트']

export const EditorSelectOption = ({
  // visible,
  type,
  onChangeType,
  children
}: EditorSelectOptionProps) => {
  return (
    <div className={styles['editor-select-container']}>
      <div className={styles['editor-select-header']}>
        {editorSelectOptionList.map((t) => (
          <div
            key={t}
            className={cx(styles['editor-select-type'], { [styles.selected]: type === t })}
            onClick={() => onChangeType(t)}
          >
            {t}
          </div>
        ))}
      </div>

      <div className={styles['editor-select-body']}>{children}</div>
    </div>
  )
}
