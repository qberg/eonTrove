import BookList from "./BookList";
import BookSearch from "./BookSearch";
import React, { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = localStorage.getItem("readingList");

    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  const addBook = (newBook) => {
    const updatedBooks = [...books, { ...newBook, status: "watchlisted" }];

    setBooks(updatedBooks);
    localStorage.setItem("readingList", JSON.stringify(updatedBooks));
  };

  const moveBook = (bookToMove, newStatus) => {
    const updatedBooks = books.map((book) =>
      book.key === bookToMove.key ? { ...book, status: newStatus } : book,
    );

    setBooks(updatedBooks);
    localStorage.setItem("readingList", JSON.stringify(updatedBooks));
  };

  return (
    <div className="p-4 container mx-auto">
      <h1 className="font-leto text-2xl">Book List</h1>
      <BookSearch onAddBook={addBook} />
      <BookList books={books} onMoveBook={moveBook} />
    </div>
  );
};

export default Books;
