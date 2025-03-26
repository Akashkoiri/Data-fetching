import { z } from "zod";

export const PokemonSchema = z.object({
  name: z.string(),
  url: z.string(),
});
