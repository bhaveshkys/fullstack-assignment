import React, { useState } from 'react';
import ModalForm from './ModalForm';

const NavBar = ({fetchSearchResults}) => {
    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSubmit = async (newCard) => {
    console.log(newCard)
    try {
      const response = await fetch('http://localhost:3001/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCard),
      });

      if (response.ok) {
        console.log('New card added:', await response.json());
        fetchSearchResults(newCard.title)
      } else {
        console.error('Error adding card:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };
  return (
    <>
    <header className="bg-black text-white py-4 px-4 md:px-8 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <img
        src="https://placehold.co/40x40"
        alt="Abstract Logo"
        className="h-6"
      />
      <h1 className="text-sm md:text-base font-semibold">Abstract | Help Center</h1>
    </div>
    <button
          className="bg-[#343a40] text-white px-4 py-2 rounded-md border border-white text-xs md:text-sm font-semibold"
          onClick={handleOpenModal}
        >
      Submit a request
    </button>
  </header>
   <ModalForm showModal={showModal} onClose={handleCloseModal} onSubmit={handleSubmit} />
   </>
  )
}

export default NavBar