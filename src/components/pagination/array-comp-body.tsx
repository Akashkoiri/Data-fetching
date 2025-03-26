"use client";

import ArrayCompItem from "../shared/arrayCompItem";
import { usePokemonQuery } from "@/lib/client/hooks/pagination/usePokemonQuery";

type props = {
  page: number;
};

export default function ArrayCompBody({ page }: props) {
  // Custom Hook (React Query)
  const { data, isError, isLoading } = usePokemonQuery(page);

  if (isLoading) return <span className="loader mx-auto my-aut my-40"></span>;
  if (isError)
    return (
      <span className="font-bold mx-auto my-aut my-40">
        Something went wrong
      </span>
    );

  return (
    <div className="mt-5 grid grid-cols-1 gap-4">
      {data
        ? data.map((pokemon, index) => (
            <div key={index}>
              <ArrayCompItem pokemon={pokemon} />
            </div>
          ))
        : null}
    </div>
  );
}
