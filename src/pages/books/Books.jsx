import { useStore } from "@/store";
import BookList from "./BookList";
import BookSearch from "./BookSearch";
import React, { useEffect } from "react";

const Books = () => {

  const {loadBooksFromLocalStorage} = useStore((state)=>state)


  useEffect(() => {
    loadBooksFromLocalStorage()
  }, [loadBooksFromLocalStorage]);

  return (
    <div className="p-4 container mx-auto">
      <h1 className="font-leto text-2xl">Book List</h1>
      <BookSearch />
      <BookList />
    </div>
  );
};

export default Books;
