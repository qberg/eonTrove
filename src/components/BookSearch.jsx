import axios from "axios";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import BookCard from "./BookCard";
import BookTable from "./BookTable";

const BookSearch = ({
  onAddBook,
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 100;

  const searchBooks = async (page=1) => {
    if (!query) return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}&page=${page}&limit=${resultsPerPage}`,
      );
      setResults(response.data.docs);
      setTotalResults(response.data.numFound);
      setCurrentPage(page)
    } catch (error) {
      console.error("Error fetching openlibrary API data", error);
    }
    setIsLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchBooks()
    }
  };

  const handlePreviousClick = () => {
    if (currentPage>1) {
      searchBooks(currentPage-1)
    }
  };  

  const handleNextClick = () => {
    if (currentPage < Math.ceil(totalResults/resultsPerPage)) {
      searchBooks(currentPage + 1)
    }
  };

  const startIndex = (currentPage-1)*resultsPerPage+1 
  const endIndex = Math.min(startIndex + resultsPerPage -1 || totalResults)

  return (
    <div className="p-4">
      <div className="sm:max-w-xs pb-2">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="Search for your next book"
        />
      </div>
      <Button
        onClick={ () => searchBooks() }
        disabled={isLoading}
      >
        {
          isLoading ?
          "Searching..." :
          "Search"
        }
      </Button>
      <div className="mt-2">
        {totalResults > 0 && (
          <p className="text-sm">
            Showing {startIndex} - {endIndex} out of {totalResults} results
          </p>
        )}
      </div>
      <div className="mt-4 max-h-64 overflow-auto">
        <BookTable booksJson={results} onAddBook={onAddBook} />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePreviousClick}
          disabled={currentPage<=1 || isLoading}
        >
          Previous
        </Button>
        <span>Page {currentPage}</span>
        <Button
          className="outline"
          onClick={handleNextClick}
          disabled={currentPage >= Math.ceil(totalResults/resultsPerPage) || isLoading}
        >
          Next
        </Button>
      </div>
    </div>
  ) 
};

export default BookSearch;
