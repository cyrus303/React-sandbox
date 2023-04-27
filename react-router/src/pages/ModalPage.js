import Modal from '../components/Modal';

import { useState } from 'react';

function ModalPage({ data }) {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <button onClick={handleClose}>I Accept</button>
    </div>
  );

  const refernceCheck = () => {
    if (data.reference) {
      return data.reference;
    } else {
      return 'Out of Scope: N/A';
    }
  };

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <div className="text">
        <h1>EFT Receipt for {data.applicationType}</h1>
        <div>name: {data.name}</div>
        <div>reference No: {refernceCheck()}</div>
      </div>
    </Modal>
  );

  return (
    <div>
      <button onClick={handleClick}>Pay by EFT</button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
