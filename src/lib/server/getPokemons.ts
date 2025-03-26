"use server";

import axios from "axios";
import { Pokemon } from "../types/pokemon-types";

export const getPokemons = async (offset: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
  );
  const results = await data.results;
  return results as Pokemon[];
};
