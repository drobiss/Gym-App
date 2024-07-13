const SearchBar = ({ setSearchingText }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search"
        placeholder="Vyhledat cvik..."
        onChange={(e) => setSearchingText(e.target.value)}
      />
    </div>
  )
}

export default SearchBar