import React from "react";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Book from "./Book";

const Books = ({ filter, search }) => {
  const { isLoading, isError, data: books, error } = useGetBooksQuery();
  const filterBy = (book) => {
    switch (filter) {
      case "all":
        return book;
      case "featured":
        return book.featured === true;
      default:
        return book;
    }
  };
  const searchBy = (book) =>
    book.name.toLowerCase().includes(search.toLowerCase());
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>There was an error</div>;
  }
  if (!isLoading && !isError && books.length === 0) {
    content = <div>No Books Found</div>;
  }
  if (!isLoading && !isError && books.length > 0) {
    content = books
      .filter(filterBy)
      .filter(searchBy)
      .map((book) => <Book book={book} />);
  }
  return (
    <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default Books;
