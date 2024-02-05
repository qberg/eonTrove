import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import React from 'react'

const BookCard = ({
  title,
  author,
  year,
  numPages,
}) => {
  return (
    <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="p-2">Title</TableHead>
            <TableHead className="p-2">Author</TableHead>
            <TableHead className="p-2">Year</TableHead>
            <TableHead  className="p-2">Page Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">{title}</TableCell>
            <TableCell>{author}</TableCell>
            <TableCell>{year}</TableCell>
            <TableCell className="text-right">{numPages}</TableCell>
          </TableRow>
        </TableBody>
    </Table>
  )
}

export default BookCard;
