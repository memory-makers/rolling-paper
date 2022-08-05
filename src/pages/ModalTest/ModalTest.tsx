import { ChangeEventHandler, useState } from 'react';

import Modal from '@/components/Modal';
import { ModalInput, ModalText } from '@/components/Modal/ModalItem';

const ModalTest = () => {
  const [, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleDueDateChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDueDate(e.currentTarget.value);
  };

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ModalText size='title'>롤링 페이퍼를 만들어볼까요?</ModalText>

      <ModalText size='label'>롤링페이퍼 이름을 적어주세요</ModalText>
      <ModalInput type='text' name='title' onChange={handleTitleChange} />

      <ModalText size='label'>언제 열어보시겠어요?</ModalText>
      <ModalInput type='date' name='dueDate' onChange={handleDueDateChange} />
    </Modal>
  )
}

export default ModalTest;
