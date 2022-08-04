import { useState } from 'react';

import Modal from '../../components/Modal';

const ModalTest = () => {
  const [, setIsModalOpen] = useState(false);

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <h1>모달 테스트</h1>
    </Modal>
  )
}

export default ModalTest;
