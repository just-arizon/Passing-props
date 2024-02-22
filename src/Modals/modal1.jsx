import React from 'react';
import "../styles/modals.css";
import { Icon } from '@iconify/react';

const modal1 = ({ isOpen, onClose}) => {
  if (!isOpen) return null;
  return (
    <div className='modal-bg'>
      <div className="modal">
        <div className='close-btn'><button onClick={onClose}><Icon icon="iconamoon:close" /></button></div>
        <div className="modal-message">
          <h4>Question 1</h4>
          <p>Tell us something</p>
        </div>
      </div>
    </div>
  );
}

export default modal1;

