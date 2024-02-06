import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BookList = ({ books, onMoveBook }) => {
  const moveToList = (book, targetList) => {
    onMoveBook(book, targetList);
  };

  const renderBookItem = (book, index) => (
    <Card key={index}>
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>{book.author_name}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="inline-flex gap-2">
          <Button
            variant="outline"
            onClick={() => moveToList(book, "completed")}
          >
            Completed
          </Button>
          <Button
            variant="outline"
            onClick={() => moveToList(book, "watchlisted")}
          >
            In Progress
          </Button>
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <div className="space-y-8 p-4">
      <h2 className="mb-4 text-xl font-bold font-onest">Books</h2>

      {books.filter((book) => book.status === "watchlisted").length > 0 && (
        <>
          <h3 className="mb-2 text-lg font-semibold font-onest">
            Reading List
          </h3>
          <div>
            {books
              .filter((book) => book.status === "watchlisted")
              .map((book, index) => renderBookItem(book, index))}
          </div>
        </>
      )}

      {books.filter((book) => book.status === "completed").length > 0 && (
        <>
          <h3 className="mb-2 text-lg font-semibold font-onest">Completed</h3>
          <div>
            {books
              .filter((book) => book.status === "completed")
              .map((book, index) => renderBookItem(book, index))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookList;
