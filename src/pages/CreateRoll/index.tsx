import { MouseEventHandler, useState } from 'react'

import Modal from '@/components/Modal';
import MakeRoll from './contents/MakeRoll';

interface Props {
  setIsModalOpen: (state: boolean) => void;
}

const CreateRoll = ({setIsModalOpen}: Props) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [paperTheme, setPaperTheme] = useState("light");
  
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(title, dueDate, paperTheme);
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <MakeRoll
        handleButtonClick={handleButtonClick}
        setTitle={setTitle}
        setDueDate={setDueDate}
        setPaperTheme={setPaperTheme}
      />
    </Modal>
  )
}

export default CreateRoll
