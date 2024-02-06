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

const BookList = ({ books, onMoveBook, onRemoveBook }) => {
  const moveToList = (book, targetList) => {
    onMoveBook(book, targetList);
  };

  const renderBookItem = (book, index, listType ) => (
    <Card key={index}>
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>{book.author_name}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button
          variant="destructive"
          onClick={() => onRemoveBook(book)}
        >
          Remove
        </Button>
        <div className="inline-flex gap-2">
          <Button
            variant="outline"
            onClick={() => moveToList(book, "completed")}
            disabled={listType==="completed"}
          >
            Completed
          </Button>
          <Button
            variant="outline"
            onClick={() => moveToList(book, "watchlisted")}
            disabled={listType==="watchlisted"}
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
              .map((book, index) => renderBookItem(book, index, "watchlisted"))}
          </div>
        </>
      )}

      {books.filter((book) => book.status === "completed").length > 0 && (
        <>
          <h3 className="mb-2 text-lg font-semibold font-onest">Completed</h3>
          <div>
            {books
              .filter((book) => book.status === "completed")
              .map((book, index) => renderBookItem(book, index, "completed"))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookList;
