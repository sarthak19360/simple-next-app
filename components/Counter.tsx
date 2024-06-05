"use client";

import { useState } from "react";

export default function () {
  const [count, setCount] = useState(0);
  return (
    <button
      className="border-2 border-gray-700 mt-5 mb-5 py-2 px-3 rounded-lg w-fit"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Count is {count}
    </button>
  );
}
