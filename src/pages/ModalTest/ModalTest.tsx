import { useState } from 'react';

import Modal from '@/components/Modal';
import ModalText from '@/components/Modal/ModalItem/ModalText';

const ModalTest = () => {
  const [, setIsModalOpen] = useState(false);

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <ModalText size='title'>롤링 페이퍼를 만들어볼까요?</ModalText>
      <ModalText size='label'>롤링페이퍼 이름을 적어주세요</ModalText>
    </Modal>
  )
}

export default ModalTest;
