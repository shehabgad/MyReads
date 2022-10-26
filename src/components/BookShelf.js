import BookList from "./BookList";

const BookShelf = ({ shelfTitle, books, bookShelfChanged }) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <BookList books={books} onSelectChange={bookShelfChanged} />
      </div>
    </div>
  )
}

export default BookShelf;