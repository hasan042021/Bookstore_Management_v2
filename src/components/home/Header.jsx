import React from "react";

const Header = ({ setFilter, filter }) => {
  return (
    <div class="flex items-center justify-between mb-12">
      <h4 class="mt-2 text-xl font-bold">Book List</h4>

      <div class="flex items-center space-x-4">
        <button
          className={`lws-filter-btn ${filter === "all" && "active-filter"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          class={`lws-filter-btn ${filter === "featured" && "active-filter"}`}
          onClick={() => setFilter("featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default Header;
