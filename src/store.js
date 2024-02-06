import { create } from "zustand";

export const useStore = create((set) => ({
  books: [],
  addBook: (newBook) => 
    set((state) => {
      const updatedBooks = [...state.books, { ...newBook, status: "watchlisted" }];
      localStorage.setItem("readingList", JSON.stringify(updatedBooks));
      return {books:updatedBooks}
  }),
  moveBook: (bookToMove, newStatus) => 
    set((state) => {
      const updatedBooks = state.books.map((book) =>
        book.key === bookToMove.key ? { ...book, status: newStatus } : book,
      )
      localStorage.setItem("readingList", JSON.stringify(updatedBooks));
      return {books:updatedBooks}
  }), 
  removeBook: (bookToRemove) => 
    set((state) => {
      if (window.confirm("Are you sure you want to remove this book?")) {
        const updatedBooks = state.books.filter((book) => 
          book.key !== bookToRemove.key
        )
        localStorage.setItem("readingList", JSON.stringify(updatedBooks));
        return {books:updatedBooks}
      }
      return state
  }), 
  loadBooksFromLocalStorage: () => {
    const storedBooks = localStorage.getItem("readingList");
    if (storedBooks) {
      set({books:JSON.parse(storedBooks)});
    } else {
      set({books:[]})
    }
  },
}))
