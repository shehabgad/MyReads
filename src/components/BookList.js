import Book from './Book';

const BookList = ({ books, onSelectChange }) => {
  if (books && books.error === undefined) {
    return (
      <ol className="books-grid">
        {
          books.map(book => {
            return <Book key={book.id} book={book} onSelectChange={onSelectChange} />
          })
        }
      </ol>
    )
  }
  else {
    return <></>
  }
}


export default BookList;