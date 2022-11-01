import { useMemo } from 'react'
import styles from './blockRoll.module.scss'

import Modal from '@/components/Modal'
import { ModalButton, ModalText } from '@/components/Modal/ModalItem'
import { convertDateStringFormat } from '@/utils/rollingPaper/paper'

interface Props {
  date: string
  setIsModalOpen: (state: boolean) => void
}

const BlockRoll = ({ date, setIsModalOpen }: Props) => {
  const newDate = useMemo(() => {
    if (date) return convertDateStringFormat(date)
  }, [date])

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ModalText type="title">
        {newDate && (
          <p>
            이 롤링페이퍼의 오픈 날짜는 <br />'{newDate}' 입니다. <br />
            <br />
          </p>
        )}
        <span className={styles.point}>오픈 날짜 이후</span>부터 <br />
        확인할 수 있어요!
      </ModalText>
      <ModalButton type="button">확인</ModalButton>
    </Modal>
  )
}

export default BlockRoll
