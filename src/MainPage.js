import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./components/BookShelf";
import { Link } from "react-router-dom"
const MainPage = () => {
  const [books, setBooks] = useState([]);
  const getAllBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
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
  useEffect(() => {
    getAllBooks();
  }, [])

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf shelfTitle={"Currently Reading"} bookShelfChanged={bookShelfChanged} books={
            books.filter((book) => { return book.shelf === "currentlyReading" })} />
          <BookShelf shelfTitle={"Want to Read"} bookShelfChanged={bookShelfChanged} books={
            books.filter((book) => { return book.shelf === "wantToRead" })} />
          <BookShelf shelfTitle={"Read"} bookShelfChanged={bookShelfChanged} books={
            books.filter((book) => { return book.shelf === "read" })} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}
export default MainPage;