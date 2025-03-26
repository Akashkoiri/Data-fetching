"use client";

import { Dispatch, SetStateAction } from "react";

type props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export default function NavButtons({ page, setPage }: props) {
  return (
    <div className="flex gap-5 my-auto">
      <button
        onClick={() => setPage((prev: number) => prev - 1)}
        className="bg-gray-600 p-2 rounded-sm disabled:bg-gray-800"
        disabled={page == 0}
      >
        Previous
      </button>
      {page}
      <button
        onClick={() => setPage((prev: number) => prev + 1)}
        className="bg-gray-600 p-2 rounded-sm disabled:bg-gray-800"
        disabled={page == 10}
      >
        Next
      </button>
    </div>
  );
}
