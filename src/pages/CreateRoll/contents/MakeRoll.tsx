import { ChangeEventHandler, MouseEventHandler, useEffect, useMemo } from 'react'
import styles from './makeRoll.module.scss'
import cx from 'classnames'

import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem'
import { convertDaysFromToday } from '@/utils/rollingPaper/paper'

interface Props {
  handleButtonClick: MouseEventHandler<HTMLButtonElement>
  dueDate: string
  setPaperTitle: (state: string) => void
  setDueDate: (state: string) => void
  setTheme: (state: string) => void
}

const MakeRoll = ({ handleButtonClick, dueDate, setPaperTitle, setDueDate, setTheme }: Props) => {
  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPaperTitle(e.currentTarget.value)
  }

  const handleDueDateChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDueDate(e.currentTarget.value)
  }

  const handleThemeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTheme(e.currentTarget.value)
  }

  return (
    <>
      <ModalText type="title">롤링 페이퍼를 만들어볼까요?</ModalText>

      <ModalText type="label">롤링페이퍼 이름을 적어주세요</ModalText>
      <ModalInput type="text" name="title" maxLength={40} onChange={handleTitleChange} />

      <ModalText type="label">언제 열어보시겠어요?</ModalText>
      <ModalInput
        type="date"
        name="dueDate"
        min={convertDaysFromToday(0)}
        value={dueDate}
        onChange={handleDueDateChange}
      />

      <ModalText type="label">테마를 선택해주세요!</ModalText>
      <div className={styles.radioWrapper}>
        <label htmlFor="light" className={styles.radioLabel}>
          <input
            type="radio"
            name="paperTheme"
            id="light"
            value="light"
            onChange={handleThemeChange}
            className={styles.radioInputField}
            defaultChecked
          />
          <span>라이트 테마</span>
          <div className={styles.radioColor} />
        </label>

        <label htmlFor="dark" className={styles.radioLabel}>
          <input
            type="radio"
            name="paperTheme"
            id="dark"
            value="dark"
            onChange={handleThemeChange}
            className={styles.radioInputField}
          />
          <span>다크 테마</span>
          <div className={cx(styles.radioColor, styles.darkColor)} />
        </label>
      </div>

      <ModalButton type="button" onClick={handleButtonClick}>
        완료
      </ModalButton>
    </>
  )
}

export default MakeRoll
