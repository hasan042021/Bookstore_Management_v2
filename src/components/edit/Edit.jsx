import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../features/api/apiSlice";
import Form from "./Form";

const Edit = () => {
  const { bookId } = useParams();
  const {
    data: book,
    isLoading,
    isError,
    error,
  } = useGetSingleBookQuery(bookId);
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && book?.id) {
    content = <Form book={book} />;
  }
  return (
    <main class="py-6 2xl:px-6">
      <div class="container">
        <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 class="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  );
};

export default Edit;
