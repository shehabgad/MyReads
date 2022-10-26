import ShelfSelector from './ShelfSelector'

const Book = ({ book, onSelectChange }) => {

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: book.imageLinks && `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <ShelfSelector book={book} onSelectChange={onSelectChange} />
        </div>
        <div className="book-title">{book.title}</div>
        {
          book.authors && book.authors.map((author) => <div key={book.id + author} className="book-authors">{author}</div>)

        }
      </div>
    </li>
  )
}

export default Book;