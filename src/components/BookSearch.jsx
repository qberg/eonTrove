import axios from "axios";
import React, { useState } from "react";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchBooks = async () => {
    if (!query) return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`,
      );
      setResults(response.data.docs);
    } catch (error) {
      console.error("Error fetching openlibrary API data", error);
    }
    setIsLoading(false);
  };

  return <div>BookSearch</div>;
};

export default BookSearch;
