import React, { useState } from "react";
import Books from "../books/Books";
import Header from "./Header";

const Home = ({ search }) => {
  const [filter, setFilter] = useState("all");
  return (
    <main class="py-12 px-6 2xl:px-6 container">
      <div class="order-2 xl:-order-1">
        <Header setFilter={setFilter} filter={filter} />
        <Books filter={filter} search={search} />
      </div>
    </main>
  );
};

export default Home;
