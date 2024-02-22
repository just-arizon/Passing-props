import React from 'react';
import { Icon } from '@iconify/react';

const modal3 = ({ isOpen, onClose}) => {
  if (!isOpen) return null;
  return (
    <div className='modal-bg'>
    <div className="modal">
      <div className='close-btn'><button onClick={onClose}><Icon icon="iconamoon:close" /></button></div>
      <div className="modal-message">
        <h4>Question 3</h4>
        <p> What's your stack ?</p>
      </div>
    </div>
  </div>
  );
}

export default modal3;
