import BookRow from "./BookRow"

function BookList() {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      feature: true,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      feature: false,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      feature: true,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      feature: false,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      feature: true,
    },
  ];
  return (
    <ul className="space-y-3">
      {
      books.map((book) => (
        <li key={book.id} 
        className="flex items-center justify-between rounded-md shadow-md p-2 bg-white">
          <BookRow book={book} />
        </li>
      ))
      }
    </ul>
  );
}

export default BookList