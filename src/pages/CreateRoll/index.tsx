import { MouseEventHandler, useState } from 'react'

import Modal from '@/components/Modal'
import MakeRoll from './contents/MakeRoll'
import ShareRollItem from '../ShareRoll/ShareRollItem'
import { PaperAPIResponse, setPaperAPI } from '@/api/user'
import { ADD_PAPER, usePaper } from '@/store/paper'
import { convertDaysFromToday } from '@/utils/rollingPaper/paper'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const CreateRoll = ({ setIsModalOpen }: Props) => {
  const { dispatch } = usePaper()
  const [paperTitle, setPaperTitle] = useState('')
  const [dueDate, setDueDate] = useState(convertDaysFromToday(7))
  const [theme, setTheme] = useState('light')

  const [paperUrl, setPaperUrl] = useState('')
  const [isNextStep, setIsNextStep] = useState(false)
  const [message, setMessage] = useState('')

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (!dueDate) return
    if (!paperTitle) return setMessage('롤링페이퍼 이름을 입력해주세요!')
    const newPaperTitle = paperTitle.trim()
    if (!newPaperTitle) return setMessage('공백이 아닌 내용을 입력해주세요!')

    const {
      result: { paperId, paperUrl }
    } = (await setPaperAPI({ paperTitle: newPaperTitle, dueDate, theme })) as PaperAPIResponse

    dispatch({
      type: ADD_PAPER,
      payload: {
        paperTitle: newPaperTitle,
        dueDate,
        theme,
        paperId,
        paperUrl
      }
    })
    setPaperUrl(paperUrl)
    setIsNextStep(true)
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      {!isNextStep && (
        <MakeRoll
          handleButtonClick={handleButtonClick}
          message={message}
          dueDate={dueDate}
          setPaperTitle={setPaperTitle}
          setDueDate={setDueDate}
          setTheme={setTheme}
        />
      )}

      {isNextStep && (
        <ShareRollItem paperUrl={paperUrl}>
          롤링 페이퍼를 만들었어요! <br /> 이제 친구들에게 써달라고 <br /> 말해볼까요?
        </ShareRollItem>
      )}
    </Modal>
  )
}

export default CreateRoll
