import { useState } from 'react';
import * as BooksAPI from "../BooksAPI";

const ShelfSelector = ({ book, onSelectChange }) => {

  const [value, setValue] = useState(book.shelf);
  const options = [
    { title: 'Currently Reading', value: 'currentlyReading' },
    { title: 'Want to Read', value: 'wantToRead' },
    { title: 'Read', value: 'read' },
    { title: 'None', value: 'none' }
  ]
  const handleSelectChange = async (e) => {
    if (e.target.value !== value) {
      onSelectChange(book.id, e.target.value);
      BooksAPI.update(book, e.target.value);
    }
    setValue(e.target.value)
  }
  return (
    <div className="book-shelf-changer">
      <select value={value} onChange={handleSelectChange}>
        <option value="moveto" disabled>
          Move to...
        </option>
        {options.map(option => {
          return <option key={option.value} value={option.value} >{option.title}</option>
        })}
      </select>
    </div>
  )
}
export default ShelfSelector;