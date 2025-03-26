"use client";

import { Pokemon } from "@/lib/types/pokemon-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePokemonQuery = (page: number) => {
  return useQuery({
    queryKey: ["pokemons", { page }],
    queryFn: async () => {
      // Waiting 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`
      );
      const results = data.results;
      return results as Pokemon[];
    },
  });
};
