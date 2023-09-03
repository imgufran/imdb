"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (!search) {
      return;
    }

    router.push(`/search/${search}`);

    // Reset the search field
    setSearch("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-2 space-x-3 mt-5"
    >
      <input
        className="w-full border rounded-full h-14 p-4 placeholder-gray-500 outline-none bg-transparent flex-1 hover:shadow-md focus-within:shadow-md"
        type="text"
        placeholder="Search Keywords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-gray-600 text-white px-8 py-3 rounded-full h-14 hover:cursor-pointer" type="submit" disabled={!search}>
        Search
      </button>
    </form>
  );
}
