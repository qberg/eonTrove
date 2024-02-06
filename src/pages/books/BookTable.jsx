import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store";

const BookTable = ({
  booksJson,
}) => {
  const {books,addBook} = useStore((state)=>state);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="p-2 font-onest">Title</TableHead>
          <TableHead className="p-2">Author</TableHead>
          <TableHead className="p-2">Year</TableHead>
          <TableHead className="p-2">Page Count</TableHead>
          <TableHead className="p-2">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {booksJson.map((book, index) => (
          <TableRow key={index}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author_name}</TableCell>
            <TableCell>{book.first_publish_year}</TableCell>
            <TableCell>{book.number_of_pages_median || "-"}</TableCell>
            <TableCell>
              <Button
                variant="link"
                onClick={() => {
                  addBook({
                    key: index,
                    title: book.title,
                    author_name: book.author_name,
                    first_publish_year: book.first_publish_year,
                    number_of_pages_median: book.number_of_pages_median || null,
                    status: "watchlisted",
                  });
                }}
                disabled={books.some((b) => 
                  b.key === book.key
                )}
              >
                Add
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BookTable;
