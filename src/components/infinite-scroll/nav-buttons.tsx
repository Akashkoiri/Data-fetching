import { Dispatch, SetStateAction } from "react";

type props = {
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
};

export default function NavButtons({ offset, setOffset }: props) {
  return (
    <div className="w-full py-1 flex gap-5">
      <button
        onClick={() => setOffset((prev: number) => prev - 1)}
        className="bg-gray-600 p-2 rounded-sm disabled:bg-gray-800"
        disabled={offset == 0}
      >
        Previous
      </button>
      {offset}
      <button
        onClick={() => setOffset((prev: number) => prev + 1)}
        className="bg-gray-600 p-2 rounded-sm disabled:bg-gray-800"
        disabled={offset == 10}
      >
        Next
      </button>
    </div>
  );
}
