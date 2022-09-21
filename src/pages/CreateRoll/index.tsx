import { MouseEventHandler, useState } from 'react'

import Modal from '@/components/Modal'
import MakeRoll from './contents/MakeRoll'
import CreateShareRoll from './contents/CreateShareRoll'
import { setPaperAPI } from '@/api/user'
import { CLIENT_PAPER_URL } from '@/config/commonLink'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const CreateRoll = ({ setIsModalOpen }: Props) => {
  const [paperTitle, setPaperTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [theme, setTheme] = useState('light')

  const [paperUrl, setPaperUrl] = useState('test')
  const [isNextStep, setIsNextStep] = useState(false)

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    const paperUrl = await getPaperUrl()
    setPaperUrl(`${CLIENT_PAPER_URL}${paperUrl}`)
    setIsNextStep(true)
  }

  const getPaperUrl = async () => {
    const {
      result: {
        paper: { paperUrl }
      }
    } = await setPaperAPI(paperTitle, dueDate, theme)
    return paperUrl
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      {!isNextStep && (
        <MakeRoll
          handleButtonClick={handleButtonClick}
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
