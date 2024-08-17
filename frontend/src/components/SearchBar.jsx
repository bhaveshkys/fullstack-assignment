import React, { useState } from 'react';

const SearchBar = ({fetchSearchResults}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
      const handleSearchClick = () => {
        console.log("button clicked") 
        fetchSearchResults(inputValue);
      };
    return (
    <section className="text-center py-12 md:py-16  bg-[#dbe3ff] px-4">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-8">How can we help?</h2>
        <div className="relative max-w-xl mx-auto">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search"
          className="w-full py-3 pl-4 pr-12 rounded-sm shadow-sm border border-black text-base md:text-lg"
        />
           <button
          className="absolute inset-y-0 right-0 flex items-center pr-4"
          onClick={handleSearchClick}>
            <img src="/arrow-right-solid.svg" className='h-6' alt="svg" />
          </button>
        </div>
      </section>
  )
}

export default SearchBar