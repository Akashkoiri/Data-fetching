"use client";

import ArrayCompItem from "../shared/arrayCompItem";
import { usePokemon } from "@/lib/client/hooks/infinite-scroll/usePokemon";
import { Pokemon } from "@/lib/types/pokemon-types";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ArrayComp() {
  // State
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string>("");
  const { ref, inView } = useInView();

  // Custom Hook (useEffect, Server Action, axios)
  usePokemon({ offset, inView, setOffset, setData, setError });

  if (error) return <span>Something went wrong!</span>;

  return (
    <div className="relative">
      <div className="mt-5 grid grid-cols-1 gap-4">
        {data.map((pokemon, index: number) => (
          <div key={index}>
            <ArrayCompItem pokemon={pokemon} />
          </div>
        ))}
        <div className="loader2 mt-4 mx-auto" ref={ref}></div>
      </div>
    </div>
  );
}
