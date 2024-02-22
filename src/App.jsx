import React, { useState } from 'react'
import './App.css'
import { Icon } from '@iconify/react';
import  Modal1 from './Modals/modal1'
import  Modal2 from './Modals/modal2'
import  Modal3 from './Modals/modal3'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    // Handle form submission logic here
  };
  return (
    <>
      <h1>Passing Props</h1>
      <Modal1 isOpen={isModalOpen} onClose={closeModal}/>
      <Modal2  isOpen={isModalOpen} onClose={closeModal}/>
      <Modal3 isOpen={isModalOpen} onClose={closeModal}/>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="">Question 1</label>
          </div>
          <input type="text" />
          <button onClick={openModal}><Icon icon="ic:outline-question-mark" width="1.2em" height="1.2em" /></button>
          <div><button className="submit">Submit</button></div>
        </div>
        <div>
          <div>
            <label htmlFor="">Question 2</label>
          </div>
          <input type="text" />
          <button onClick={openModal}><Icon icon="ic:outline-question-mark" width="1.2em" height="1.2em" /></button>
          <div><button className="submit">Submit</button></div>
        </div>
        <div>
          <div>
            <label htmlFor="">Question 3</label>
          </div>
          <input type="text" />
          <button onClick={openModal}><Icon icon="ic:outline-question-mark" width="1.2em" height="1.2em" /></button>
          <div><button className="submit">Submit</button></div>
        </div>
      </form>
    </>
  )
}

export default App
