import { MouseEventHandler, useState } from 'react'

import Modal from '@/components/Modal'
import MakeRoll from './contents/MakeRoll'
import CreateShareRoll from './contents/CreateShareRoll'
import { PaperAPIResponse, setPaperAPI } from '@/api/user'
import { CLIENT_PAPER_URL } from '@/config/commonLink'
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

  const [paperUrl, setPaperUrl] = useState('test')
  const [isNextStep, setIsNextStep] = useState(false)

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (!paperTitle || !dueDate) return
    const newPaperTitle = paperTitle.trim()
    if (!newPaperTitle) return

    const {
      result: {
        paper: { paperId, paperUrl }
      }
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
    setPaperUrl(`${CLIENT_PAPER_URL}${paperUrl}`)
    setIsNextStep(true)
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      {!isNextStep && (
        <MakeRoll
          handleButtonClick={handleButtonClick}
          dueDate={dueDate}
          setPaperTitle={setPaperTitle}
          setDueDate={setDueDate}
          setTheme={setTheme}
        />
      )}

      {isNextStep && <CreateShareRoll paperUrl={paperUrl} />}
    </Modal>
  )
}

export default CreateRoll
