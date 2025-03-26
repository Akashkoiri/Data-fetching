import { z } from "zod";
import { PokemonSchema } from "../schemas/pokemon-schema";

export type Pokemon = z.infer<typeof PokemonSchema>;
