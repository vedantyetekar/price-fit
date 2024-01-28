"use client";

const Searchbar = () => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mt-12">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Enter product link"
      />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
