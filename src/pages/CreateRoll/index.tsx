import { MouseEventHandler, useState } from 'react'

import Modal from '@/components/Modal'
import MakeRoll from './contents/MakeRoll'
import CreateShareRoll from './contents/CreateShareRoll'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const CreateRoll = ({ setIsModalOpen }: Props) => {
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [paperTheme, setPaperTheme] = useState('light')

  const [paperUrl, setPaperUrl] = useState('test')
  const [isNextStep, setIsNextStep] = useState(false)

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(title, dueDate, paperTheme)
    setPaperUrl(`https://rolling-paper.vercel.app/rollingpaper/${paperUrl}`)
    setIsNextStep(true)
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      {!isNextStep && (
        <MakeRoll
          handleButtonClick={handleButtonClick}
          setTitle={setTitle}
          setDueDate={setDueDate}
          setPaperTheme={setPaperTheme}
        />
      )}

      {isNextStep && <CreateShareRoll paperUrl={paperUrl} />}
    </Modal>
  )
}

export default CreateRoll
