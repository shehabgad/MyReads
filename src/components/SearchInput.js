import { useState } from 'react'
import { Link } from 'react-router-dom'
const SearchInput = ({ onChange }) => {
  const [query, setQuery] = useState("")

  const handleInputChange = (e) => {
    setQuery(e.target.value)
    if (e.target.value.trim() !== "") {
      onChange(e.target.value);
    }

  }
  return (
    <div className="search-books-bar">
      <Link
        className="close-search"
        to="/"
      >
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search by title, author, or ISBN"
        />
      </div>
    </div>
  )
}
export default SearchInput;