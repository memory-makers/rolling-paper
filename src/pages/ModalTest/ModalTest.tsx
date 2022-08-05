import { ChangeEventHandler, MouseEventHandler, useState } from 'react';

import Modal from '@/components/Modal';
import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem';

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

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log('ModalTest Button clicked');
  }

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ModalText type='title'>롤링 페이퍼를 만들어볼까요?</ModalText>

      <ModalText type='label'>롤링페이퍼 이름을 적어주세요</ModalText>
      <ModalInput type='text' name='title' onChange={handleTitleChange} />

      <ModalText type='label'>언제 열어보시겠어요?</ModalText>
      <ModalInput type='date' name='dueDate' onChange={handleDueDateChange} />

      <ModalButton type='button' onClick={handleButtonClick} color='secondary'>취소</ModalButton>
      <ModalButton type='button' onClick={handleButtonClick}>완료</ModalButton>
      <ModalButton type='button' onClick={handleButtonClick} size='small' color='secondary'>취소</ModalButton>
      <ModalButton type='button' onClick={handleButtonClick} size='small'>삭제</ModalButton>
    </Modal>
  )
}

export default ModalTest;
