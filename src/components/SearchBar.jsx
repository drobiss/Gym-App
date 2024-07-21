import React from 'react'

const SearchBar = ({ setSearchingText }) => {
  return (
    <input 
      type="text" 
      placeholder="Vyhledat cvik..."
      onChange={(e) => setSearchingText(e.target.value)}
    />
  )
}

export default SearchBar