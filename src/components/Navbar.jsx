import React from 'react'
import SearchBar from './SearchBar'

const Navbar = ({ setSearchingText }) => {
  return (
    <nav>
      <h3 className='logo'>GymBro</h3>
      <SearchBar setSearchingText={setSearchingText} />
    </nav>
  )
}

export default Navbar