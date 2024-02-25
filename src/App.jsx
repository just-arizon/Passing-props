import React, { useState } from 'react'
import './App.css'
import { Icon } from '@iconify/react';
import  Modal1 from './Modals/modal1'
import  Modal2 from './Modals/modal2'
import  Modal3 from './Modals/modal3'

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalNumber) => {
    setActiveModal(modalNumber);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleSubmit = (modalNumber) => (e) => {
    e.preventDefault();
    openModal(modalNumber);
  };
  return (
    <>
      <h1>Passing Props</h1>
      <Modal1 isOpen={activeModal === 1} onClose={closeModal} />
      <Modal2 isOpen={activeModal === 2} onClose={closeModal} />
      <Modal3 isOpen={activeModal === 3} onClose={closeModal} />
      <form action="">
        <div>
          <div>
            <label htmlFor="">Question 1</label>
          </div>
          <input type="text" />
          <button><Icon icon="ic:outline-question-mark" width="1.2em" height="1.2em" /></button>
          <div><button className="submit"onClick={handleSubmit(1)}>Submit</button></div>
        </div>
        <div>
          <div>
            <label htmlFor="">Question 2</label>
          </div>
          <input type="text" />
          <button><Icon icon="ic:outline-question-mark" width="1.2em" height="1.2em" /></button>
          <div><button className="submit"  onClick={handleSubmit(2)}>Submit</button></div>
        </div>
        <div>
          <div>
            <label htmlFor="">Question 3</label>
          </div>
          <input type="text" />
          <button><Icon icon="ic:outline-question-mark" width="1.2em" height="1.2em" /></button>
          <div><button className="submit" onClick={handleSubmit(3)}>Submit</button></div>
        </div>
      </form>
    </>
  )
}

export default App
