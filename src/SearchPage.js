import { useState, useEffect, useRef } from 'react';
import SearchInput from './components/SearchInput';
import BookList from './components/BookList';
import * as BooksAPI from "./BooksAPI"
const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const mounted = useRef(true)
  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])
  const searchBooks = async (query) => {
    if (query.trim() === "") {
      // made query 123 so it return an invalid response 
      // when i just make setSBooks([]) it doesnt render an empty list of books and doesnt change at all
      query = "123"
    }
    const allbooks = await BooksAPI.getAll();
    const searchedBooks = await BooksAPI.search(query, 15);

    if (searchedBooks) {
      for (let i = 0; i < searchedBooks.length; i++) {
        searchedBooks[i].shelf = "none"
        let common = allbooks.filter(book => {

          return (book.id === searchedBooks[i].id)
        })
        if (common.length > 0) {
          searchedBooks[i].shelf = common[0].shelf
        }
      }
    }
    if (mounted.current) {
      setBooks(searchedBooks)
    }
  }
  const bookShelfChanged = (id, value) => {
    let booksClone = books;
    let newBooks = booksClone.map((book) => {
      if (book.id === id) {
        book.shelf = value;
      }
      return book;
    })
    setBooks(newBooks);
  }

  return (
    <div className="search-books">
      <SearchInput onChange={searchBooks} />
      <div className="search-books-results">
        <BookList books={books} onSelectChange={bookShelfChanged} />
      </div>
    </div>
  )
}
export default SearchPage;