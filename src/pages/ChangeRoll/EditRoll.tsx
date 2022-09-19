import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react'
import cx from 'classnames'
import styles from './editRoll.module.scss'

import Modal from '@/components/Modal'
import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const EditRoll = ({ setIsModalOpen }: Props) => {
  const [paperTitle, setPaperTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [theme, setTheme] = useState('light')

  const handlePaperTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPaperTitle(e.currentTarget.value)
  }

  const handleDueDateChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDueDate(e.currentTarget.value)
  }

  const handleThemeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTheme(e.currentTarget.value)
  }

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    // console.log('버튼 클릭시 롤링페이퍼 수정', paperTitle, dueDate, theme)
    setIsModalOpen(false)
  }

  useEffect(() => {
    setPaperTitle('3학년 2반 친구들')
    setDueDate('2022-12-16')
    setTheme('dark')
  }, [])

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ModalText type="title">롤링 페이퍼를 만들어볼까요?</ModalText>
      <ModalText type="label">롤링페이퍼 이름을 적어주세요</ModalText>
      <ModalInput
        type="text"
        name="paperTitle"
        value={paperTitle}
        onChange={handlePaperTitleChange}
      />
      <ModalText type="label">언제 열어보시겠어요?</ModalText>
      <ModalInput type="date" name="dueDate" value={dueDate} onChange={handleDueDateChange} />
      <ModalText type="label">테마를 선택해주세요!</ModalText>
      <div className={styles.radioWrapper}>
        <label htmlFor="light" className={styles.radioLabel}>
          <input
            type="radio"
            name="theme"
            id="light"
            value="light"
            onChange={handleThemeChange}
            className={styles.radioInputField}
            checked={theme === 'light'}
          />
          <span>라이트 테마</span>
          <div className={styles.radioColor} />
        </label>

        <label htmlFor="dark" className={styles.radioLabel}>
          <input
            type="radio"
            name="theme"
            id="dark"
            value="dark"
            onChange={handleThemeChange}
            className={styles.radioInputField}
            checked={theme === 'dark'}
          />
          <span>다크 테마</span>
          <div className={cx(styles.radioColor, styles.darkColor)} />
        </label>
      </div>
      <ModalButton type="button" onClick={handleButtonClick}>
        완료
      </ModalButton>{' '}
    </Modal>
  )
}

export default EditRoll
