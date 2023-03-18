import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../../features/api/apiSlice";

const Form = () => {
  const [addBook, { isLoading, isError, isSuccess, error, data: book }] =
    useAddBookMutation();
  const { id } = book || {};
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setprice] = useState("");
  const [rating, setRating] = useState(null);
  const [featured, setFeatured] = useState("");
  const navigate = useNavigate();
  if (isSuccess && id) {
    navigate("/");
  }
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        name,
        author,
        thumbnail,
        price,
        rating,
        featured,
      })
    );
  };
  return (
    <form class="book-form" onSubmit={handleAdd}>
      <div class="space-y-2">
        <label for="lws-bookName">Book Name</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div class="space-y-2">
        <label for="lws-author">Author</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div class="space-y-2">
        <label for="lws-thumbnail">Image Url</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
      </div>

      <div class="grid grid-cols-2 gap-8 pb-4">
        <div class="space-y-2">
          <label for="lws-price">Price</label>
          <input
            required
            class="text-input"
            type="number"
            id="lws-price"
            name="price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>

        <div class="space-y-2">
          <label for="lws-rating">Rating</label>
          <input
            required
            class="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>

      <div class="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          class="w-4 h-4"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
        />
        <label for="lws-featured" class="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button type="submit" class="submit" id="lws-submit">
        Add Book
      </button>
    </form>
  );
};

export default Form;
