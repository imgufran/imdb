"use client";

import { useEffect } from "react";

// This is a client Component
export default function Error({error, reset}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>Try Again</button>
    </div>
  )
}
 