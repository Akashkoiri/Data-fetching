"use client";

import { getPokemons } from "@/lib/server/getPokemons";
import { Pokemon } from "@/lib/types/pokemon-types";
import { Dispatch, SetStateAction, useEffect } from "react";

type props = {
  offset: number;
  inView: boolean;
  setOffset: Dispatch<SetStateAction<number>>;
  setData: Dispatch<SetStateAction<Pokemon[]>>;
  setError: Dispatch<SetStateAction<string>>;
};

export const usePokemon = async ({
  offset,
  inView,
  setOffset,
  setData,
  setError,
}: props) => {
  useEffect(() => {
    // Getting & Setting data, Error handling
    const getData = async () => {
      try {
        const results = await getPokemons(offset);
        setData((prev) => [...prev, ...results]);
        setOffset((no) => no + 1);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      }
    };

    if (inView) getData();
  }, [inView]);
};
